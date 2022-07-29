let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);

console.log(fruits.find((fruit) => fruit === 'Apple'));  
console.log(fruits.find((fruit) => fruit === 'Apple1'));      

console.log(fruits.findIndex((fruit) => fruit === 'Apple')); 
console.log(firstIndex = fruits.findIndex((fruit) => fruit === 'Apple1'));  

console.log(fruits.push('Kiwi'));
console.log((fruits));

console.log(fruits.pop('Kiwi'));
console.log((fruits));

let numbers = [3,6,4,4,7,8,9,1]

console.log(numbers.sort());

console.log(fruits.slice(1, 3));

console.log(fruits.slice(1));
console.log(fruits.slice(-1));

fruits.forEach((fruit) => console.log(fruit)); 