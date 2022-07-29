var helloworld =  'Hello World';
// console.log(helloworld[0]);

let a = 'a'
let b = 'b';
if (a + b) {
    // true
    console.log(a + ' is less than ' + b);
} else if (a > b) {
    console.log(a + ' is less than ' + b);
    
} else {
    console.log(a + 'and' + b + 'are equal.');
}

let c = 'c';
let d = 'D';

console.log(c.toLowerCase())
console.log(d.toLowerCase)
console.log(c + d);

let longString =
   'This is a very long string which needs ' +
   'to wrap across differnt lines ' +
   'otherwise my code is unreadable';

console.log(longString);
longString =
'This is a very long string which needs  \
to wrap across differnt lines \
otherwise my code is unreadable';

console.log(longString);