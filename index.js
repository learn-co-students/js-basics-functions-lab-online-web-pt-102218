// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let hq = 42
    let out;
    if (hq > street) {
        return hq - street
    } else {
        return street - hq
    }
}

function distanceFromHqInFeet(street) {
   return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(one, two) {
    if (one > two) {
        return (one - two) * 264
    } else {
        return (two - one) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    let cost;
    if (distance <= 400) {
        return 0
    } else if (distance < 2000) {
        return (distance-400) * .02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}