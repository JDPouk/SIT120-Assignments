let vue = new Vue({
  el: '#app2',
  data: {
    grossIncome: "",
    otherIncome: "",
  },
  computed: {
    result() {
      if((this.grossIncome.length !== 0 ) ){ 
        return parseInt(this.grossIncome)
      }
      if(this.otherIncome.length !== 0 )
      {
        return parseInt(this.otherIncome)
      }
      else{return parseInt(this.grossIncome) + parseInt(this.otherIncome)}
    }
  }
})
  
 new Vue({
    el: '#app',
    data: {
      components: {
        ButtonCounter
      }
    }
})

new Vue({
  el: '#example-1',
  data: {
    show: true
  }
})

Vue.mixin({
  created: function showAlert()
  {
      alert("Message Sent")
      var heading3 = document.getElementById("heading3");
  }
})


const valueSelector = '[data-testid=stepper-value]'
expect(result.find(valueSelector).text()).toContain('0')