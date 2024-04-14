import { updateGround, setupGround } from "./ground.js";
import { updateDino, setupDino, getDinoRects, setDinoLose } from "./dino.js";
import { updateCactus, setupCactus, getCactusRects } from "./cactus.js";

const WIDTH = 100;
const HEIGHT = 30;
const SPEED_SCALE_INCREASE = 0.00001

const world = document.querySelector("[data-world]");
const scoreEle = document.querySelector("[data-score]");
const startScreenEle = document.querySelector("[data-start-screen]");

document.addEventListener("keydown",handleStart,{once:true});

window.addEventListener("resize",function() {
    let x;
    if(window.innerWidth / window.innerHeight < WIDTH/HEIGHT){
        x = window.innerWidth / WIDTH;
    }else{
        x = window.innerHeight / HEIGHT;
    }

    world.style.width = `${WIDTH * x}px`;
    world.style.height = `${HEIGHT * x}px`;
});

let prevTime;
let speedScale;
let score;

function update(time){
    if(prevTime == null){
        prevTime = time;
        window.requestAnimationFrame(update);
        return;
    }

    const change = time - prevTime;

    updateGround(change,speedScale);
    
    updateCactus(change,speedScale);
    updateSpeedScale(change);
    updateScore(change);
    updateDino(change,speedScale); 

    if(checkLose()){
        return handleLose();
    }

    prevTime = time;
    window.requestAnimationFrame(update);
}

function handleStart(){
    prevTime = null;
    speedScale=1;
    score = 0;
    setupGround();
    setupDino();
    setupCactus();
    startScreenEle.classList.add("hide");
    window.requestAnimationFrame(update);
}

function checkLose(){
    const dinoRect = getDinoRects();
    return getCactusRects().some(rect => isCollision(rect,dinoRect));
}

function isCollision(rect1,rect2){
    return (
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom > rect2.top

    );
}

function handleLose(){
    setDinoLose();
    setTimeout(() => {
        document.addEventListener("keydown",handleStart,{once:true});
        startScreenEle.classList.remove("hide");
    },100);
}

function updateSpeedScale(change) {
    speedScale += change * SPEED_SCALE_INCREASE;
}

function updateScore(change){
    score+= change * 0.01;
    scoreEle.textContent = Math.floor(score);
}