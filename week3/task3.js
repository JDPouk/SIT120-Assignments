const now = new Date(Date.now());
console.log('The current time is ');
console.log(now.toDateString());

let newDate = new Date();
setTimeout(() => {
    newDate = Date.now()
    console.log(firstDate);
}, 1000);