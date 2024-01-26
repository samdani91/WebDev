var arr = [];

var i = 1;
var j;
//while loops
while(i<5){
    arr.push(i);
    i++;
}

console.log(arr);

//for loops
for(;i<=10;i++){
    arr.push(i);
}

// console.log(arr);

var sum = 0;
for(j=0;j<arr.length;j++){
    sum+=arr[j];
}

// console.log(sum);

var grid = [[1,2,3],[4,5,6,7,8],[9,10]]

for(i=0;i<grid.length;i++){
    for(j=0;j<grid[i].length;j++){
        // console.log(grid[i][j]);
        process.stdout.write(grid[i][j] + ' ');
    }
    console.log();
}

//do while loops
var myArr = [];
i = 6;
do{
    myArr.push(i);
    i++;
}while(i<=5);

console.log(myArr)