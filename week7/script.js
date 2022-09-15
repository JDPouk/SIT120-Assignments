Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#components-demo' })


let taskComponent = {
  template: `<li><slot></slot></li>`
};

let taskListComponent = {
  template: `<div class="task-list">
              <h3>List Of Tasks</h3>
              <ul>
                  <task v-for="task in tasks">{{task}}</task>
              </ul>
             </div>`,
  
  components: {
      'task' : taskComponent
  },

  data(){
      return{
          tasks : ['Go to Work', 'Eat Lunch', 'Go for a Run', 'Clean House']
      }
  }
};


let app = new Vue({
el: '#app',

components: {
  'task-list' : taskListComponent
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
