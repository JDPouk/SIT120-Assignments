Vue.component('names', {
  props: ['firstName', 'lastName'],
  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})

new Vue({ el: '#props-demo' })