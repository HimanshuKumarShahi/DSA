let day = 0;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Sunday");
    break;
}

switch (true) {
  case 3 > 2:
    console.log("True! 3 is greater than 2");
    break;
  case 1 > 2:
    console.log("False! 2 is greater than 1");
    break;
}

let num = 0.2 + 0.3;

switch (num) {
  case 0.5:
    console.log("Good");
    console.log(num);
    
    break;
    case 0.3:
        console.log("Not Good");
        console.log(num);
        break;
        default:
            console.log("Invalid WoW");
            console.log(num);   // Precision Error here 
}
