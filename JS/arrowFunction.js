const arr = [4,5.6,-9.8,3.14,42,-2]

const sqList = (arr) => {
    const squaredIntegers = arr.filter(num=> Number.isInteger(num) && num>0).map(x => x*x);
    return squaredIntegers;
};

console.log(sqList(arr));

const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b,0);
    };
})();

console.log(sum(1,2,3,4,5));