const now = new Date(Date.now());
console.log('The current time is ');
console.log(now.toDateString());

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());


let newDate = new Date();
setTimeout(() => {
    newDate = Date.now()
    console.log(newDate);
}, 1000);