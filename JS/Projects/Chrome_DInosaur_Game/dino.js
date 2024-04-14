import { setProperty,getProperty,increaseProperty } from "./updateProperty.js";

const dinoEle = document.querySelector("[data-dino]")
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currFrameTime;
let yVelocity;

export function setupDino(){
    isJumping = false;
    dinoFrame = 0;
    currFrameTime = 0;
    yVelocity = 0;
    setProperty(dinoEle,"--bottom",0);
    document.removeEventListener("keydown",onJump);
    document.addEventListener("keydown",onJump);
}

export function updateDino(change,speedScale){
    handleRun(change, speedScale);
    handleJump(change);
}

function handleRun(change, speedScale){
    if(isJumping){
        dinoEle.src =  `img/dino-stationary.png`;
        return;
    }

    if(currFrameTime >= FRAME_TIME){
        dinoFrame = (dinoFrame+1)% DINO_FRAME_COUNT;
        dinoEle.src = `img/dino-run-${dinoFrame}.png`;
        currFrameTime -= FRAME_TIME;
    }

    currFrameTime += change * speedScale;
}

function handleJump(change){
    if (!isJumping) return;

    increaseProperty(dinoEle, "--bottom", yVelocity * change);

    if (getProperty(dinoEle, "--bottom") <= 0) {
        setProperty(dinoEle, "--bottom", 0);
        isJumping = false;
    }

    yVelocity -= GRAVITY * change;
}

function onJump(e) {
    if (e.code !== "Space" || isJumping) return;
  
    yVelocity = JUMP_SPEED;
    isJumping = true;
}

export function getDinoRects(){
    return dinoEle.getBoundingClientRect();
}

export function setDinoLose(){
    dinoEle.src = "img/dino-lose.png";
}