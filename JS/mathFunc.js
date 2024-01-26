console.log(Math.random()); //decimal, 0<= num <1
var num = Math.floor(Math.random()*20); //whole number between 0 and 19
console.log(num);

//within a range
var max=50;
var min=1;
num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num);

console.log(Math.max(10,25));

//str to int
console.log(parseInt("1412"));
console.log(parseInt("10011",2)); //binary to int

