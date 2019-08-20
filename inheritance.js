var parent={}
var child={}
child.name="preetam"
 parent.getName = function(){
     return this.name;
 }
 child.__proto__=parent
 
 child.getName()

