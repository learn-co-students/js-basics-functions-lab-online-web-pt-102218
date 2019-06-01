// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42)
}

function distanceTravelledInFeet(start,end){
    return Math.abs(start - end)*264
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let price;
  
    switch(true) {
      case (distance <= 400):
        price = 0
        break;
      case (distance > 400 && distance <= 2000):
        price = ((distance - 400) * 0.02)
        break;
      case (distance > 2000 && distance <= 2500):
        price = 25
        break;
      default:
        return "cannot travel that far"
    }
  
    return price;
  }
  