// Code your solution in this file!
const Hq =42;
const feet =264;

function distanceFromHqInBlocks(num){
    if (num > 42) {
        return num - Hq;   
    }else if (num < 42) {
        return Hq - num;
    }
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num)* feet;
}

function distanceTravelledInFeet(Hq,num2){
    if (num2 > Hq){
        return(num2 - Hq)* feet;
    }else {
        return(Hq - num2)*feet;
    }
}

function calculatesFarePrice(start,destination){
    const travel = distanceTravelledInFeet(start,destination)
    if (travel < 400){
        return(0)
    }else if (travel > 400 && travel < 2000){
        return (travel - 400) * .02 
    }else if (travel > 2000 && travel < 2500){
        return(25);
    }else{
        return("cannot travel that far")
    }    
  
}