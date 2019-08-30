new Vue({
  el: "#app",
  data: function() {
    return {
      samples: [
        ['Example 1 (JSON)', 'plan_1.json', 'plan_1.sql'],
        ['Example 1 (plain text)', 'plan_1.txt', 'plan_1.sql'],
        ['Example 2', 'plan_2.json', 'plan_2.sql'],
        ['Example 3', 'plan_3.json', 'plan_3.sql'],
        ['Example 4', 'plan_4.json'],
        ['Example 5', 'plan_5.json', 'plan_5.sql'],
        ['With subplan', 'plan_6.txt'],
        ['With CTE', 'plan_7.txt'],
        ['Very large plan', 'plan_8.json'],
        ['With trigger', 'plan_trigger.json', 'plan_trigger.sql'],
        ['With trigger (plain text)', 'plan_trigger.txt', 'plan_trigger_2.sql'],
        ['Parallel (verbose)', 'plan_parallel.json'],
        ['Parallel (4 workers)', 'plan_parallel2.txt', 'plan_parallel2.sql']
      ],
      planInput: '',
      queryInput: '',
      draggingPlan: false,
      draggingQuery: false
    };
  },
  mounted() {
    const textAreas = document.getElementsByTagName('textarea');
    Array.prototype.forEach.call(textAreas, (elem) => {
        elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
    });
  },
  methods: {

    submitPlan() {
      planData[0] = this.planInput;
      planData[1] = this.queryInput;
      router.push({ path: 'plan' });
    },

    loadSample(sample) {
      axios.get('samples/' + sample[1]).then((response) => {
        this.planInput = response.request.responseText;
      });
      if (sample[2]) {
        axios.get('samples/' + sample[2]).then((response) => {
          this.queryInput = response.request.responseText;
        });
      } else {
        this.queryInput = '';
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
        input.value = reader.result || '';
        input.dispatchEvent(new Event('input'));
      };
      reader.readAsText(file);
    }
  }
});
