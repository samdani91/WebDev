export function getProperty(ele,prop){
    return parseFloat(getComputedStyle(ele).getPropertyValue(prop)) || 0;
}

export function setProperty(ele,prop,value){
    ele.style.setProperty(prop,value);
}

export function increaseProperty(ele,prop,inc){
    setProperty(ele,prop,getProperty(ele,prop)+inc);
}