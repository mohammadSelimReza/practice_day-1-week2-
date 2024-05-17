const grade = (result) =>{
    if(result>=100 && result >= 80) console.log("A+");
    else if(result>=79 && result >= 75) console.log("You have got A+ in the examination.");
    else if(result>=74 && result >= 70) console.log("You have got A in the examination.");
    else if(result>=69 && result >= 60) console.log("You have got A- in the examination.");
    else if(result>=59 && result >= 50) console.log("You have got B in the examination.");
    else if(result>=49 && result >= 40) console.log("You have got C in the examination.");
    else if(result>=49 && result >= 33) console.log("You have got D in the examination.");
    else if(result>=32 && result >= 0) console.log(" You have got F in the examination.");
    else console.log("Invalid");
}
grade(80);