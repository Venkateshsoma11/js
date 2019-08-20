var numbers = [12,23,54,23,45,67,44,34]
 
var even_numbers=numbers.filter(function(num){
     return num%2===0
 })


numbers.push(43)

numbers.pop()

//To add at the begining of array
numbers.unshift(11)

//To pop first element
numbers.shift()

//TO add element,delete(optional),items to add. returns how many deleted
numbers.splice(1,0,22,33,44,55,66)

numbers.splice(1,5)


//to get elements
numbers.slice(1,3)

//---------

numbers.map(function(num){
    return num*10
})

////Let and Const

function testfu(){
    console.log(test);
    if(true){ 
    let test=2;}
    console.log(test)
    }
testfu()


const v="hi"
//You can't change the value of v
v="ksladms" //error



