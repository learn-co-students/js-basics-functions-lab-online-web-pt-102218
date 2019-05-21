// Code your solution in this file!
const distanceFromHqInBlocks = (dist)=>{
    return Math.abs(dist - 42)
}

const distanceFromHqInFeet = (dist)=>{
    return distanceFromHqInBlocks(dist)*264
}

const distanceTravelledInFeet = (start, end)=>{
    return Math.abs(start-end)*264
}

const calculatesFarePrice = (start,end) =>{
    let feet = distanceTravelledInFeet(start, end)
    if (feet < 400 ){
        return 0
    }else if (feet > 2500){
        return 'cannot travel that far'
    }
    else if (feet >2000){
        return 25
    }
    else{
        return ( feet - 400 ) * .02
    }
}