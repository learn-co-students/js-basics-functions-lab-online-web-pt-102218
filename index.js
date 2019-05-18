// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(startingDistance, endDistance){
    return Math.abs(startingDistance - endDistance) * 264
}

function calculatesFarePrice(startingDistance, endDistance){
    let feetTravelled = distanceTravelledInFeet(startingDistance, endDistance)
    if (feetTravelled <= 400){
        return 0
    }
    else if (feetTravelled > 2500){
        return "cannot travel that far"
    }
    else if (feetTravelled > 2000){
        return 25;
    }
    else if (feetTravelled > 400 && feetTravelled <= 2000){
        return (feetTravelled - 400) * 0.02
    }
    
}