import "./common.js";
import axios from "axios";
import { createApp } from "vue";
import moment from "moment";
import timeago from "vue-timeago3";
import _ from "lodash";
import "vite/modulepreload-polyfill";
import { Modal } from "bootstrap";
import { onMounted, ref, watch } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLink, faTrashAlt);

let confirmModal;
let deleteModal;
const app = createApp({
  setup() {
    const samples = [
      ["Example 1 (JSON)", "plan_1.json", "plan_1.sql"],
      ["Example 1 (plain text)", "plan_1.txt", "plan_1.sql"],
      ["Example 2", "plan_2.json", "plan_2.sql"],
      ["Example 3", "plan_3.json", "plan_3.sql"],
      ["Example 4", "plan_4.json"],
      ["Example 5", "plan_5.json", "plan_5.sql"],
      ["With subplan", "plan_6.txt"],
      ["With CTE", "plan_7.txt"],
      ["Very large plan", "plan_8.json"],
      ["With trigger", "plan_trigger.json", "plan_trigger.sql"],
      ["With trigger (plain text)", "plan_trigger.txt", "plan_trigger_2.sql"],
      ["Parallel (verbose)", "plan_parallel.json"],
      ["Parallel (4 workers)", "plan_parallel2.txt", "plan_parallel2.sql"],
    ];
    const titleInput = ref("");
    const planInput = ref("");
    const queryInput = ref("");
    const draggingPlan = ref(false);
    const draggingQuery = ref(false);
    const plans = ref([]);
    const plan = ref(null);
    const planToDelete = ref(null);
    const deleteFromServer = ref(false);

    function checkForm(event) {
      plan.value = null;
      event.preventDefault();
      const dontAskAgain = localStorage.getItem("dontAskBeforeSubmit");
      if (dontAskAgain) {
        submitPlan();
      } else {
        confirmModal.show();
      }
    }

    function submitPlan() {
      // User don't want to be asked again
      const dontAskAgain = document.getElementById("dontAskAgain").checked;
      if (dontAskAgain) {
        localStorage.setItem("dontAskBeforeSubmit", true);
      }

      let inputPlan = plan.value;
      // plan comes from form or from plans list and has never been submitted
      if (!inputPlan) {
        titleInput.value =
          titleInput.value ||
          "Plan created on " + moment().format("MMMM Do YYYY, h:mm a");
        inputPlan = {
          title: titleInput.value,
          plan: planInput.value,
          query: queryInput.value,
          createdOn: new Date(),
        };
      }
      share(inputPlan);
    }

    function loadSample(sample) {
      titleInput.value = sample[0];
      axios.get(staticUrl + "samples/" + sample[1]).then((response) => {
        planInput.value = response.request.responseText;
      });
      if (sample[2]) {
        axios.get(staticUrl + "samples/" + sample[2]).then((response) => {
          queryInput.value = response.request.responseText;
        });
      } else {
        queryInput.value = "";
      }
    }

    function handleDrop(event) {
      const input = event.srcElement;
      if (!(input instanceof HTMLTextAreaElement)) {
        return;
      }
      draggingPlan.value = false;
      draggingQuery.value = false;
      if (!event.dataTransfer) {
        return;
      }
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (reader.result instanceof ArrayBuffer) {
          return;
        }
        input.value = reader.result || "";
        input.dispatchEvent(new Event("input"));
      };
      reader.readAsText(file);
    }

    function loadPlans() {
      const storedPlans = [];
      for (let i in localStorage) {
        if (_.startsWith(i, "plan_")) {
          storedPlans.push(JSON.parse(localStorage[i]));
        }
      }
      plans.value = _.chain(storedPlans).sortBy("createdOn").reverse().value();
    }

    function loadPlan(plan) {
      plan.value = plan;
      const dontAskAgain = localStorage.getItem("dontAskBeforeSubmit");
      if (dontAskAgain) {
        share(plan);
      } else {
        confirmModal.show();
      }
    }

    function getPlanUrl(plan) {
      return plan.shareId ? "/" + plan.shareId : "#" + plan.id;
    }

    function deletePlan(plan) {
      if (deleteFromServer.value && plan.shareId) {
        axios
          .get("/plan/" + plan.shareId + "/" + plan.deleteKey)
          .then(onPlanDelete.bind(this, plan));
      } else {
        onPlanDelete(plan);
      }
    }

    function onPlanDelete(plan) {
      localStorage.removeItem(plan.id ? plan.id : "plan_" + plan.shareId);
      loadPlans();
      deleteModal.hide();
    }

    function share(plan) {
      const form = document.getElementById("submitForm");
      axios
        .post(form.action, {
          title: plan.title,
          plan: plan.plan,
          query: plan.query,
        })
        .then((response) => {
          localStorage.removeItem(plan.id);
          const data = response.data;
          const id = "plan_" + data.id;
          localStorage.setItem(
            id,
            JSON.stringify({
              id: id,
              shareId: data.id,
              title: plan.title,
              createdOn: plan.createdOn,
              deleteKey: data.deleteKey,
            })
          );

          // redirect to page with plan from server
          window.location.href = "/plan/" + data.id;
        });
    }

    onMounted(() => {
      const textAreas = document.getElementsByTagName("textarea");
      loadPlans();
      confirmModal = new Modal(document.getElementById("confirmSubmitModal"));
      deleteModal = new Modal(document.getElementById("deletePlanModal"));
    });

    watch(planToDelete, (newPlan, oldPlan) => {
      deleteFromServer.value = false;
    });

    return {
      samples,
      titleInput,
      planInput,
      queryInput,
      draggingPlan,
      draggingQuery,
      plans,
      plan,
      planToDelete,
      deleteFromServer,
      checkForm,
      submitPlan,
      loadSample,
      handleDrop,
      loadPlan,
      getPlanUrl,
      deletePlan,
    };
  },
});
app.use(timeago);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
