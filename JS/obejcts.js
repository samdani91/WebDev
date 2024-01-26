var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
  "the drink": "water",

  12:"Samdani",
  33:"Ismail"
}; //we can use like a map

var myHat = testObj.hat;
var myShirt = testObj.shirt;
var myShoes = testObj.shoes;

console.log(myHat, myShirt, myShoes);

testObj.shirt = "T-Shirt";
console.log(testObj.shirt);

console.log(testObj["the drink"]);

console.log(testObj[12]);

//add properties to obj
testObj.newProperty = "Add New";
testObj["Watch"]="Rolex";

console.log(testObj.newProperty);

//delete properties from obj
delete testObj.newProperty;

//check property
function checkObj(checkProp){
    if(testObj.hasOwnProperty(checkProp)){
        return testObj[checkProp];
    }else{
        return "Not Found\n";
    }
}

console.log(checkObj("shirts"));

