function feetToMile(feet){
    if (feet <= 0){
        console.log("length cann't be negative");
    }
    else {var mile = feet / 5280;
        return mile;
    
    }
    }
     var result = feetToMile(5280);
     console.log(result);