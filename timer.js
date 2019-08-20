/*const timer =function(time){ 
setTimeout(function(){
    console.log(`executes after ${time} seconds`)
},time*1000);
}

timer(2);

console.log('this statement wil not wait for timer to complete') */
//--------------------------------

let handle
const timer1 =function(time){ 
    handle=setInterval(function(){
        console.log(`executes after ${time} seconds`)
    },time*1000);
};

timer1(2);

console.log('this statement wil not wait for timer to complete')

setTimeout(function(){
    clearInterval(handle);
},10000);
