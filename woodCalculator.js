function woodCalculator(chair, table, bed) {
    var forChair = chair * 2;
    var forTable = table * 3;
    var forBed = bed *5;
    var totalWood = forChair + forTable +forBed;
    return totalWood;
    }
    var result = woodCalculator(1, 2, 3);
    console.log(result);