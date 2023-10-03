// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks-42);

}

function distanceFromHqInFeet(location){
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264
}


function distanceTravelledInFeet(start, location){
    return Math.abs(location - start) * 264;
}


function calculatesFarePrice(start, location){
    const distance = distanceTravelledInFeet(start, location);

    if (distance <= 400){
        return 0;
    }else if(distance > 400 && distance  <= 2000){
        return (distance - 400)*0.02;
    }else if (distance > 2000 && distance <= 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}