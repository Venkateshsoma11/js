var sum = function(a,b){return a+b;}

var multiply = function(a,b){return a*b;}

var divide = function(a,b){return a/b;}

var calculate = function (a,b,fun){
    return fun(a,b);
}

var maxVal = function(a,b){
    var max = a>b?a:b;
    return max;
}


var mx=calculate(75,65,sum);

var average = calculate(65,75,function(a,b){
     return sum(a,b)/arguments.length;
})

console.log('sum value is ' +mx); 
console.log('average value is ' +average); 

//-----------------------------------

