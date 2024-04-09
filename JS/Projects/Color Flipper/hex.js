const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let randomNumber = 0;

btn.addEventListener('click',function(){
    randomNumber = randNum(randomNumber);
    let hexColor = "#";
    for(let i=0;i<6;i++){
        let idx = randNum();
        hexColor += hex[idx];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

});

function randNum() {
    return Math.floor(Math.random()*hex.length);
}