var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      firstName: 'sam',
      email: "Testing@testmail.com",
      lastName: "word123",
    }
  });

  export default {
    data() {
      return {
        sent: true
      }
    }
  }
