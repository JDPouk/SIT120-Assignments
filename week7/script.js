Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#components-demo' })


let propComponent = {
  template: `<li><slot></slot></li>`
};

let propListComponent = {
  template: `<div class="prop-list">
              <h3>List Of props</h3>
              <ul>
                  <prop v-for="prop in props">{{prop}}</prop>
              </ul>
             </div>`,
  
  components: {
      'prop' : propComponent
  },

  data(){
      return{
        props: ['Work', 'Lunch', 'Run', 'Clean']
      }
  }
};


let app = new Vue({
el: '#app',

components: {
  'prop-list' : propListComponent
}
});

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

new Vue({ el: '#components-demo' })
