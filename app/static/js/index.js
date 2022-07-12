import "./common.js";
import axios from "axios";
import { createApp } from "vue/dist/vue.esm-bundler";
import moment from "moment";
import timeago from "vue-timeago3";
import _ from "lodash";
import $ from "jquery";
import "vite/modulepreload-polyfill";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add all icons to the library
library.add(fas);

const app = createApp({
  data: function () {
    return {
      samples: [
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
      ],
      titleInput: "",
      planInput: "",
      queryInput: "",
      draggingPlan: false,
      draggingQuery: false,
      plans: [],
      planToDelete: null,
      deleteFromServer: false,
    };
  },
  watch: {
    planToDelete: function (newPlan, oldPlan) {
      this.deleteFromServer = false;
    },
  },
  mounted() {
    const textAreas = document.getElementsByTagName("textarea");
    this.loadPlans();
  },
  methods: {
    checkForm(event) {
      var form = event.target;
      event.preventDefault();
      this.titleInput =
        this.titleInput ||
        "Plan created on " + moment().format("MMMM Do YYYY, h:mm a");
      var createdOn = new Date();
      var form = event.target;
      this.share(form.action, {
        title: this.titleInput,
        plan: this.planInput,
        query: this.queryInput,
        createdOn: createdOn,
      });
    },

    loadSample(sample) {
      this.titleInput = sample[0];
      axios.get(staticUrl + "samples/" + sample[1]).then((response) => {
        this.planInput = response.request.responseText;
      });
      if (sample[2]) {
        axios.get(staticUrl + "samples/" + sample[2]).then((response) => {
          this.queryInput = response.request.responseText;
        });
      } else {
        this.queryInput = "";
      }
    },

    handleDrop(event) {
      const input = event.srcElement;
      if (!(input instanceof HTMLTextAreaElement)) {
        return;
      }
      this.draggingPlan = false;
      this.draggingQuery = false;
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
    },

    loadPlans() {
      var plans = [];
      for (var i in localStorage) {
        if (_.startsWith(i, "plan_")) {
          plans.push(JSON.parse(localStorage[i]));
        }
      }

      this.plans = _.chain(plans).sortBy("createdOn").reverse().value();
    },

    getPlanUrl(plan) {
      return plan.shareId ? "/" + plan.shareId : "#" + plan.id;
    },

    deletePlan(plan) {
      if (this.deleteFromServer && plan.shareId) {
        axios
          .get("/plan/" + plan.shareId + "/" + plan.deleteKey)
          .then(this.onPlanDelete.bind(this, plan));
      } else {
        this.onPlanDelete(plan);
      }
    },

    onPlanDelete(plan) {
      localStorage.removeItem(plan.id ? plan.id : "plan_" + plan.shareId);
      this.loadPlans();
      $("#deletePlanModal").modal("hide");
    },

    share(url, plan) {
      axios
        .post(url, {
          title: plan.title,
          plan: plan.plan,
          query: plan.query,
        })
        .then((response) => {
          localStorage.removeItem(plan.id);
          var data = response.data;
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
    },
  },
});
app.use(timeago);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
