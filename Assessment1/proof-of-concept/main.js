let vue = new Vue({
  // new Vue app
  el: '#app2',
  data: {
    // props that cotains the income values entered by the user
    grossIncome: "",
    otherIncome: "",
  },
  computed: {
    // returns the sum of the income values
    result() {
     // checks to see if the value is an empty string
      if((this.grossIncome.length !== 0 && this.otherIncome.length !== 0) ){ 
       // returns the sum of bother income types if they not empty
        return parseInt(this.grossIncome) + parseInt(this.otherIncome)
      }
      if(this.otherIncome.length !== 0 )
      {
         // returns only the icome value with a integer
        return parseInt(this.otherIncome)
      }
      if(this.grossIncome.length !== 0 )
      {
         // returns only the icome value with a integer
         return parseInt(this.grossIncome)
      }
    }
  }
})
  

 // returns the sum of bother income types if they not empty
new Vue({
  el: '#transition_status',
  data: {
    show: true
  }
})

new Vue({
  // new Vue app
  el: '#contact',
  data: {
    // props that cotains the income values entered by the user
    firstName: "",
  },
})

Vue.mixin({
  created: function showAlert()
  {
      // alerts when a input is clicked

      alert("Message Sent")
      var heading3 = document.getElementById("heading3");
  }
})

 // Testcase will be place here to check the value of a string
const valueSelector = '[data-testid=stepper-value]'
expect(result.find(valueSelector).text()).toContain('0')
