var User = function(){
    var firstName='';
    var lastName='';
    var obj = {
        setFirstName:function(fname){
            firstName = fname;
        },
        getFirstName:function(){
            return firstName;
        },
        setLastName:function(lname){
            lastName=lname;
        },
        getLastName:function(){
            return lastName;
        }

    }
    return obj;
}

var vinay = User();
vinay.setFirstName('vinay')
console.log(vinay.getFirstName())