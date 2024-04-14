import { increaseProperty, setProperty, getProperty } from "./updateProperty.js";

const SPEED = 0.05;

const groundEle = document.querySelectorAll("[data-ground]");

export function setupGround(){
    setProperty(groundEle[0],"--left",0);
    setProperty(groundEle[1],"--left",300);
}
export function updateGround(change, speedScale){
    groundEle.forEach(ground => {
        increaseProperty(ground,"--left",change * speedScale  * SPEED * -1);

        if(getProperty(ground,"--left") <= -300) {
            increaseProperty(ground,"--left",600);
        }
    })
}