function distanceFromHqInBlocks (number) {
  return Math.abs(number - 42)
}

function distanceFromHqInFeet (number) {
  return distanceFromHqInBlocks(number) * 264
}

function distanceTravelledInFeet (num1, num2) {
  return distanceFromHqInFeet(num2) - distanceFromHqInFeet(num1)
}

function calculatesFarePrice(num1, num2) {
  let totalFeet = distanceTravelledInFeet (num1, num2)
  if (totalFeet <= 400) {
    return 0
  } else if (totalFeet > 2500) {
    return 'cannot travel that far'
  } else if (totalFeet <= 2500 && totalFeet > 2000) {
    return 25
  } else {
    return (totalFeet - 400) * .02
  }
}
