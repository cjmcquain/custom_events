const inputComponent = {
  template: `<input :placeholder="placeholder" v-model="input" class="input is-small" type="text" />`,
  props: ["placeholder"],
  data() {
    return {
      input: ""
    };
  }
};

new Vue({
  el: "#app",
  components: {
    "input-component": inputComponent
  },
  data: {
    notes: [],
    timestamples: [],
    placeholder: "Enter a note"
  }
});
