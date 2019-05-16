function distanceFromHqInBlocks (fromPoint) {
    //returns the number of blocks given a value
    let distance
    if(fromPoint > 42) {
        distance = fromPoint - 42;
    }else if(fromPoint < 42){
        distance = 42 - fromPoint;
    }
    return distance;
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
    let price
    if (distanceTravelledInFeet(start, destination) <= 400){
        price = 0;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        price = 'cannot travel that far'
    }else if (distanceTravelledInFeet(start, destination) > 2000){
        price = 25;
    } else if (400 < distanceTravelledInFeet(start, destination) < 2000){ 
        price = (distanceTravelledInFeet(start, destination) * 2) / 100 + 8;
    }
    return price ;

}