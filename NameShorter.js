/*Scenario:is If we are getting the name more then 10 character
then make it ot 10 character and add three ... dots 
in front of it to show that they are continuing*/

let name="Nikesh Devendran Vadivel"
// output: Nikesh Deven...
function NameShorten(name,len){
    let result=name.substring(0,len)+"...";
    console.log(result);
}
NameShorten(name,5);

