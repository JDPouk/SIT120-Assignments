Vue.component('base-textbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})


new Vue({
  el: "#app",
})