let numbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207];

let choice = prompt("Do you want to sum or average the numbers? Type sum or average, all lowercase.");

switch(choice) { 
case "sum":
  alert("The sum of the numbers is " + (34+56+324+183+231+72-10+207));
break

case "average": 
  alert("The average of the numbers is " + ((34+56+324+183+231+72-10+207)/8));
break
default:
  alert("Error");
break
}