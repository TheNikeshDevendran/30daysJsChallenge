// Arithmetic operator
let num1=50;
let num2=2;
console.log(`Addition:${num1+num2}`);
console.log(`Subtraction:${num1-num2}`);
console.log(`Multiplication:${num1*num2}`);
console.log(`Division:${num1/num2}`);
console.log(`Remainder:${num1%num2}`);

//Assignment operator
let count=4;
console.log(count+=1);
console.log(count-=1);

//comparison operator
console.log(`>  ${num1>num2}`);
console.log(`<  ${num1<num2}`);
console.log(`>= ${num1>=num2}`);
console.log(`<= ${num1<=num2}`);
console.log(`== ${num1==num2}`);
console.log(`===${num1===num2}`);

//logical operator
let num3=5;
let num4=6;
console.log(num3==5 && num4==5); //and
console.log(num3==5 || num4==5); //or
console.log(!(num3==5));         //not


//Ternary operator
console.log(num3>0? 'positive++':'negative--');


