// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  if (distance > 42) {
  return (distance - 42)
  } else {
  return (42 - distance)
  }
}

function distanceFromHqInFeet (distance) {
  if (distance > 42) {
  return ((distance - 42) * 264)
   } else {
     return ((42 - distance) * 264)
   }
  }
  
  function distanceTravelledInFeet (starting, ending) {
    if (starting > ending) {
      return ((starting - ending) * 264)
    } else {
      return ((ending - starting) * 264)
    }
  }
  
  function calculatesFarePrice (starting, ending) {
    const distance = distanceTravelledInFeet(starting, ending);
    if (distance <= 400) {
    return 0 
    } else if (distance >= 401 && distance <= 2000 ) {
      return .02 * (distance - 400)
    } else if (distance > 2000 && distance <= 2500) {
      return 25
    } else {
      return "cannot travel that far"
    }
  }
