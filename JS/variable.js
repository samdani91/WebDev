//string,number,boolean,null,symbol,object and undefined

var myName = "Samdani"; //whole program
let nickName = "Oni";//within scope
const PI = 3.14; //read only; but we can mutate const array

var a, b;
a = 2;
b = 5;
console.log(a, b)

//case sensitive var name and function name
//camelCase 

var sum = a + b;
console.log("Sum is", sum);

var diff = a - b;
var product = a * b;
var quotient = a / b;

//incrementing and decrementing
a++;
b--;

a+=9;
b+=6;
console.log(a,b);

var myDecimal = 3.1416;
console.log(myDecimal)

//remainder
var remainder;
remainder = a % b;
console.log(remainder);

//string
var firstName = "Samdani";
var lastName = "Mozumder";
var fullName = firstName+" "+lastName; //string concat
console.log(fullName)

var str = "I am a \"double quoted\" string inside \"double quotes\"";
var str2 = 'I am a "double quoted" string'
var str3 = `'I am a "double quoted" string inside a 'single quoted' string'`
console.log(str+'\n'+str2+'\n'+str3);

/*

\' single quote
\" double quote
\\ backslash
\n newlinw
\r carriage return
\t tab
\b backspace
\f form feed

*/

//var vs let
//using var we can create duplicate name variables but not let
var cat = "Tom";
var cat = "Pussy Cat";

let mouse = "Jerry";
// let mouse = "abcd";

function checkScope(){
    // var i = "function scope";
    // let i = "function scope";
    if(true){
        // i="block scope";
        // let i="block scope";
        var i="block scope";
        console.log("Block Scope i is: ",i);
    }
    console.log("Function Scope i is: ",i);
}

checkScope();