/*

function decrease(){
    let n = parseInt(document.getElementById("output").textContent);
    n = n - 1;
    if(n<0) document.getElementById("output").style.color = "red";
    else if(n === 0) document.getElementById("output").style.color = "black";
    document.getElementById("output").textContent=n;
}

function reset(){
    document.getElementById("output").style.color = "black";
    document.getElementById("output").textContent=0;
}

function increase(){
    let n = parseInt(document.getElementById("output").textContent);
    n = n + 1;
    if(n>0) document.getElementById("output").style.color = "green";
    if(n === 0) document.getElementById("output").style.color = "black";
    document.getElementById("output").textContent=n;
}

*/

let count = 0;

const value = document.querySelector("#output");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        console.log(styles);

        if(styles.contains('decrease')) count--;
        else if(styles.contains('increase')) count++;
        else count = 0;

        if(count > 0) value.style.color = "green";
        else if(count < 0) value.style.color = "red";
        else value.style.color = "black";

        value.textContent = count;

    })
})