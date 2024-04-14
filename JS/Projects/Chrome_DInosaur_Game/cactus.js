import { setProperty, getProperty, increaseProperty } from "./updateProperty.js";

const SPEED = 0.05;
const CACTUS_INTERVAL_MIN = 500;
const CACTUS_INTERVAL_MAX = 2000;
const world = document.querySelector("[data-world]");

let nextTime;

export function setupCactus(){
    nextTime = CACTUS_INTERVAL_MIN;
    document.querySelectorAll("[data-cactus]").forEach(cactus =>{
        cactus.remove();
    });
}

export function updateCactus(change, speedScale){
    document.querySelectorAll("[data-cactus]").forEach(cactus =>{
        increaseProperty(cactus,"--left",change * speedScale * SPEED * (-1));
        if(getProperty(cactus,"--left") <= -100){
            cactus.remove();
        }
    });

    if(nextTime <= 0){
        createCactus();
        nextTime = randomNumberBetween(CACTUS_INTERVAL_MIN,CACTUS_INTERVAL_MAX)/speedScale;
    }

    nextTime -= change;
}

function createCactus(){
    const cactus = document.createElement("img");
    cactus.dataset.cactus = true;
    cactus.src = "img/cactus.png";
    cactus.classList.add("cactus");
    setProperty(cactus,"--left",100);
    world.append(cactus);
}

export function getCactusRects(){
    return [...document.querySelectorAll("[data-cactus]")].map(cactus=> {
        return cactus.getBoundingClientRect();
    })
}

function randomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}