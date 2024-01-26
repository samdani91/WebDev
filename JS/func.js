function print(){
    // var c; //not global,scope variable
    c=10; //global var hence var is not used
    console.log("Hello World")
}

print();

function sum(a,b){
    console.log(c);
    console.log("Sum:"+(a+b));
}

sum(5,-1);

var outerWear = "t-shirt";

function outfit(){
    var outerWear = "sweater" //loca var takes precedence over global
    return outerWear;
}

console.log(outfit());
console.log(outerWear);

