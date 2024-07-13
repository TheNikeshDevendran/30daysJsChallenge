// Activity 1 VARIABLE DECLARATION
var number=50;
let name='John';
console.log(`number=${number}`);
console.log(`name=${name}`);

// Activity 2 CONSTANT DECLARATION
const login=true;
console.log(`login=${login}`);

// Activity 3 DATATYPE
let StudentName='sam';
let Rollno=58;
let subject=['english','math','sci'];
let marks={
    'eng':60,
    'math':55,
    'sci':70
}
let Pass_In_All_Subject=true;

console.table([typeof StudentName,typeof Rollno,typeof subject,
              typeof marks,typeof Pass_In_All_Subject]);

// Activity 4 REASSIGNING VARIABLES
let score=30;
console.log(`Score before REASSIGNING:${score}`);
score=100;
console.log(`Score After REASSIGNING:${score}`);

// Activity 5 Understanding const
const OrganizationName='DeveloperCompunity';
OrganizationName='DeveloperChaining';
//we cannot reassign a value to const once it have bean set
console.log(OrganizationName)