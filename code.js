console.log('hello')
//khai bao bien
let name ="Ha";
let age = 20;
let isStudent= true;
 console.log("Name : " +name);
 console.log("Age: "+age);
 console.log("la hoc sinh "+ isStudent);
//ham tong
function sum(a, b){
    s=a+b;
    return s;
 }
console.log(sum(5.1, 6));
console.log(sum(7, 12));
// kiem tra so chan và so le
function checkOddEven(number){
    if(number%2==0)
        console.log(number +" la so chan.");
    else console.log(number +" la so le.");
}
checkOddEven(9);
checkOddEven(18);
// vong lap
for(let i=0;i<=10;i++){
    console.log(i);
}



