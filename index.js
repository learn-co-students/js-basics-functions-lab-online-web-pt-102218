// Code your solution in this file!
function distanceFromHqInBlocks(_street) {
  return Math.abs(42 - _street);
}

function distanceFromHqInFeet(_street) {
  return distanceFromHqInBlocks(_street) * 264;
}

function distanceTravelledInFeet(_street1, _street2) {
  return Math.abs(_street1 - _street2) * 264;
}

function calculatesFarePrice(_start, _destination) {
  let dist = distanceTravelledInFeet(_start, _destination);
  if (dist - 400 <= 0) {
    return 0;
  } else if (dist <= 2000) {
    return (dist - 400) * 0.02;
  } else if (dist <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}