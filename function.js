var greet = function(firstname,lastname){
    var message = function(message){
        console.log(message+':'+firstname+','+lastname);    }

        return message;
    }


    var greetfun = greet('Vinay','kumar');

    greetfun("good morning")