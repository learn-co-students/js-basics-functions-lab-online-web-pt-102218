function distanceFromHqInBlocks (fromPoint) {
    //returns the number of blocks given a value
    if(fromPoint > 42) {
       return fromPoint - 42;
    }else {
        return 42 - fromPoint;
    }
}

   
function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(startBlock, endBlock){
    let distance 
    if(startBlock > endBlock) {
        distance = (startBlock - endBlock) * 264;
    } else if(endBlock > startBlock) {
        distance = (endBlock - startBlock) * 264;
    }
    return distance
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){ 
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }

}