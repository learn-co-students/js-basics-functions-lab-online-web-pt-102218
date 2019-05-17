function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber >= 42) {
        return streetNumber - 42 
    }
    else if (streetNumber < 42) {
        return 42 - streetNumber
    }


}// Code your solution in this file!

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start < end) {
        return (end - start) * 264

    }
    else {
        return (start - end) * 264
    }

}

function calculatesFarePrice(start, destintation) {
    if (distanceTravelledInFeet(start, destintation) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destintation) <= 2000 && distanceTravelledInFeet(start, destintation) > 400) {
        return (distanceTravelledInFeet(start, destintation) - 400) * .02
    }
    else if (distanceTravelledInFeet(start, destintation) < 2500 && distanceTravelledInFeet(start, destintation) > 2000) {
        return 25
    }
    else {
        return "cannot travel that far"
    }

}
