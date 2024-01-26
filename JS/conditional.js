function isOdd(a){
    if(a%2) return true;
    return false;
}

console.log(isOdd(10));

function isGreater(a, b){
    if(a>b) console.log("a is greater");
    else if(b>a) console.log("b is greater");
    else console.log("Equal");
}

isGreater(10,9);

console.log(3===3); //true -> strict
console.log(3==='3');//false
console.log(3=='3');//true ->type conversion, string to number

// !== strinct not equal, not type conversion
// switch syntax as C

//ternary
var a = 10;
var b = 10;

console.log((a===b)? true:false);