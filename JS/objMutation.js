function freezeObj(){
    const MATH_CONSTANTS = {
        PI:3.14
    };

    Object.freeze(MATH_CONSTANTS);//prevent obj mutation

    try{
        MATH_CONSTANTS.PI=99;
    }catch(ex){
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}

console.log(freezeObj());