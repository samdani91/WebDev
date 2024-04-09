const colors = ["green","red","rgba(133,122,200)","#f15025","cyan","gray"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let randomNumber = 0;

btn.addEventListener('click',function(){
    randomNumber = randNum(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function randNum(prev) {
    let num = Math.floor(Math.random()*colors.length);
    while(num === prev){
        num = Math.floor(Math.random()*colors.length);
    }
    return num;
}