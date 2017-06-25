function sum(){
var msg = 0;
//function parameters are actually stored as an array-like structure called arguments. 
//The arguments object is automatically available inside any function
//We can get the legth of arguments
//if we don't pass any parameter, then below code executed arguments.lengh ==0
if(arguments.length ==0 ){
msg = "You haven't passed any parameters<br/>";
document.write(msg);
}
//if we pass single parameter, then the arguments length is 1
else if(arguments.length == 1){
msg = "Please pass atleast two parameters<br/>";
document.write(msg);
}
else {
var result = 0;
var len = arguments.length;
//since arguments acts like an array, we can loop through it.
for(i=0;i<len;i++){
result = result +arguments[i];
}
document.write(result+"<br/>");
}
}
sum();//Calling function with no parameters
sum(1);//Calling function with one parameters
sum(1,8);//Calling function with two parameters
sum(1,2,5,6,67,8,8);//Calling function with multiple parameters