function brickCalculator(floorNumber){
    if (floorNumber <= 10){
        var brickAmount = floorNumber * 15000;
        return brickAmount;
    }
    else if(floorNumber >= 11 && floorNumber <= 20){
        var floorNumber = floorNumber - 10;
        var brickAmount =(floorNumber * 10000) + 150000;
        return brickAmount;
    }
  else if(floorNumber >= 21 && floorNumber){
     var floorNumber = floorNumber - 20;
     var brickAmount =(floorNumber * 5000) + 250000;
     return brickAmount;
  }
else {
   return "something is wrong"
}
}
var result = brickCalculator(15);
console.log(result);