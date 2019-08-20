var amount = function(tip){
    var cal = function(cal){
        console.log("Total bill amount before tip"+cal); 
        cal=tip+cal;
        console.log("Total bill amount "+cal); 
    }

        return cal;
    }


    var calculate = amount(10);

    calculate(100)