var myName = "Samdani";

var nameLength = myName.length;

console.log("Lenght:"+nameLength)
console.log("First Letter is "+myName[0]+" of "+myName);

//immutable -> can't chanhe character in a string
myName[0]='A';
console.log(myName); //didn't change

var str="";
str+=myName;
console.log(str);


