var arr = ["Samdani",23];
var arrLength = arr.length;
console.log(arr,arrLength);

arr.push(["Oni",1412]);//add at the end
console.log(arr);

arr.unshift(17311);//add at beginning
console.log(arr);

var removedLast = arr.pop();
console.log("Removed: "+removedLast);

var removedFirst = arr.shift();
console.log("Removed: "+removedFirst);

var arr2 = [1,2,3,4,5];
console.log(arr2);
arr2[arr2.length-1]=1412;
console.log(arr2);

var grid =[[1,2,3],[4,5,6]];
console.log(grid);

var temp = grid[0][0];
console.log(temp);

