// Acticity 1: If else statement
let num=4;
// if(num>0){
//     console.log("Positive number");
// }
// else{
//     console.log("Negative number");
// }

let age=2;
if(!(age<=0) && (age>=18)){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}


// Activity 2: Nested if else
let n1=-3,n2=-5,n3=-7;

if(((n1 && n2)&& n3)>=0){
    if(n1>(n2 && n3)){
        console.log(`${n1}:is greater`);
    }
    else if(n2>(n3 && n1)){
        console.log(`${n2}:is greater`);
    }
    else{
        console.log(`${n3}:is greater`);
    }
}
else{
    console.log("Feed proper number");
}


// Activity 3:Switch Cases
let DayOfWeek=-1;
if((DayOfWeek>0 && DayOfWeek<=7)){
    switch(DayOfWeek){
        case 1:{
            console.log("Sunday");
            break;
        }
    
        case 2:{
            console.log("Monday");
            break;
        }
    
        case 3:{
            console.log("Tueday");
            break;
        }
    
        case 4:{
            console.log("Wednesday");
            break;
        }
    
        case 5:{
            console.log("Thursday");
            break;
        }
    
        case 6:{
            console.log("Friday");
            break;
        }
    
        case 7:{
            console.log("Saturday");
            break;
        }
    }
}
else{
    console.log("Enter day's of the week in range of 1-7")
}

let marks=5;
switch(marks){
    case marks<35:
        console.log("Fail-F")
}