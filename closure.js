var ages = [23,24,12,16,34,24,67,65]

//var ageGT35Fun = function(age){
  //  return age>35;
//}
 var result = ages.map(function(age){
    return age+2
})

.filter(function(val,index,ages){
   return val>35;
});
var res= ages.reduce(function(old,newVal){return old+newVal},10);

console.log(result);
console.log(res);



