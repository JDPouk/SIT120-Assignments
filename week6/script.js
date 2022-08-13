var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      name: 'sam',
      password: "password123",
    }
  });

var app2 = new Vue({
  el: '#app-2',
  data: {
    checkedNames: []
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})