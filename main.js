/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// When the JS is connected properly, the following code will update the status message.
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

function funny() {
    document.getElementById("q1").innerHTML = "The Last Airbender was a good and accurate adaptation of the Avatar series."
};

funny();


// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.
function divideByTwo(num) {
    return (num / 2);
};

var q2 = document.getElementById('q2')
var inputNum = document.getElementById('inputNum')

document.getElementById("button2").addEventListener("click", function() {
    q2.innerHTML = divideByTwo(inputNum.value)
})



// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.


var q3 = document.getElementById('q3');

function greeting(firstName, lastName) {
    return ("Hello " + firstName + ", hello " + lastName + "!");
};

document.getElementById("button3").addEventListener("click", function() {
    document.getElementById('q3').innerHTML = greeting(document.getElementById('firstName').value, document.getElementById('lastName').value);
});


// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.

var nums = [1, 2, 3, 5, 8, 13];
//ideal output is 31
function average(nums) {
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    var numsAverage = (total / nums.length);
    document.getElementById('q4').innerHTML = "<p>Number Array: " + nums + "</p><p>Average: " + numsAverage + "</p>";
}

average(nums);



// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.


function cashewTotal(price) {
    var cashewTotal = (price * 6)
    document.getElementById("q5").innerHTML = "<p>Since cans are costing $" + price + ", your crippling cashew addiction will cost you $" + cashewTotal + " this month.</p>"
}

var price = 7.72;
cashewTotal(price);



// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area(x, y) {
    var totalArea = x * y
    return totalArea;
}

function perimeter(x, y) {
    var totalPerimeter = ((2 * x) + (2 * y));
    return totalPerimeter;
}

var x = 8;
var y = 13;

document.getElementById("q6").innerHTML = "<p>A quadrilateral with a width of " + x + " and a height of " + y + " will have an area of " + area(x, y) + " and a perimeter of " + perimeter(x, y) + ".</p>"




// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.


function quarter(num) {
    var quartered = (num / 4);
    return quartered;
}

document.getElementById("button7").addEventListener("click", function() {
    var num7 = document.getElementById("number7").value;
    console.log(num7);
    document.getElementById("q7").innerHTML = "<p>Your number, quartered, is " + quarter(num7) + "!</p>"
});


// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours) {
    if (hours >= 8) {
        return "Wow! You must be well-rested, keep it up!"
    } else {
        return "You better get that sleep schedule under control!"
    }
};

document.getElementById("button8").addEventListener("click", function() {
    var hours = document.getElementById("inputHours").value;
    document.getElementById("q8").innerHTML = sleepings(hours);
});



// 9. Develop a function that determines a person's age by asking them for their birth year.

function age(year) {
    var age = (2016 - year)
    return "You are either " + age + " or " + (age - 1) + " years old!"
};

document.getElementById("button9").addEventListener("click", function() {
    document.getElementById('q9').innerHTML = age(document.getElementById("inputYear").value);
});


// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

function teams(arr) {
    var team1 = [];
    var team2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            team1.push(arr[i]);
        } else {
            team2.push(arr[i]);
        }
    }
    document.getElementById('q10').innerHTML = "<p>Team 1: " + team1 + "</p><p>Team 2: " + team2;
    return team1
    return team2
}

teams(teammates);


// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.


function threes(userInput) {
    var splitDigits = userInput.toString().split("");

    var total = 0;
    for (var i = 0; i < splitDigits.length; i++) {
        var num = parseInt(splitDigits[i])
        total += num;

    }
    return total;
}

document.getElementById("button11").addEventListener("click", function() {
    var userInput = document.getElementById("threeDigits").value;
    document.getElementById("q11").innerHTML = "The total is: " + threes(userInput)
})



// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

function change(quarters, dimes, nickels, pennies) {
    var total = quarters + dimes + nickels + pennies;
    return total.toFixed(2);
}

document.getElementById("button12").addEventListener("click", function() {
    var quarters = (document.getElementById("quarterInput").value * .25)
    var dimes = (document.getElementById("dimeInput").value * .1)
    var nickels = (document.getElementById("nickelInput").value * .05)
    var pennies = (document.getElementById("pennyInput").value * .01)
    document.getElementById("q12").innerHTML = "Your total is $" + change(quarters, dimes, nickels, pennies)
})




// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
document.getElementById("buttonA").addEventListener("click", function() {
    var phoneNumber = document.getElementById("phoneInput").value;
    var numbers = phoneNumber.toString().split("");
    console.log(numbers);
    for (var i = 0; i < numbers.length; i++) {
        if (numbers.length < 10 || numbers.length > 11) {
            document.getElementById("qa").innerHTML = "Sorry, wrong number!"
        } else if (numbers.length === 11 && numbers[0] === "1") {
            numbers.shift(0)
            var phoneNumber = numbers.join("")
            document.getElementById("qa").innerHTML = phoneNumber[0] + phoneNumber[1] + phoneNumber[2] + "-" + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + "-" + phoneNumber[6] + phoneNumber[7] + phoneNumber[8] + phoneNumber[9];
        } else if (numbers.length == 10) {
            var phoneNumber = numbers.join("")
            document.getElementById("qa").innerHTML = phoneNumber[0] + phoneNumber[1] + phoneNumber[2] + "-" + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + "-" + phoneNumber[6] + phoneNumber[7] + phoneNumber[8] + phoneNumber[9];
        } else {
            document.getElementById("qa").innerHTML = "Sorry, wrong number!"
        }
    }
})


// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
arrayOfAllTheThings = ["one", 23, {
    thingsWhalesLove: "beaches"
}, "six hundred", 33, 6834, "5,435"]

function numberOrNot(arrayOfAllTheThings) {
    for (var i = 0; i < arrayOfAllTheThings.length; i++) {
        if (isNaN(arrayOfAllTheThings[i]) == 1) {
            document.getElementById("qb").innerHTML += "<p>Not a number.</p>"
        } else {
            document.getElementById("qb").innerHTML += "<p>Number.</p>"
        }
    }
}

numberOrNot(arrayOfAllTheThings);


// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.

function diceRoll() {
    var roll1 = Math.floor(Math.random() * 6) + 1
    var roll2 = Math.floor(Math.random() * 6) + 1
    var diceTotal = roll1 + roll2;
    return diceTotal
}

document.getElementById("buttonC").addEventListener("click", function() {
    document.getElementById("qC").innerHTML = "<p>You rolled " + diceRoll() + "!";
})


// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.
function diceRoll2() {
    var total = 0;
    var roll1 = Math.floor(Math.random() * 6) + 1
    var roll2 = Math.floor(Math.random() * 6) + 1
    var roll = roll1 + roll2;
    total += roll;
    document.getElementById("qD").innerHTML += "<p>You started off with rolling " + roll + "!</p>"
    count = 1;

    while (total <= 40) {
        var roll1 = Math.floor(Math.random() * 6) + 1
        var roll2 = Math.floor(Math.random() * 6) + 1
        var roll = roll1 + roll2;
        total += roll;
        document.getElementById("qD").innerHTML += "<p>You rolled " + roll + ". You've moved " + total + " spaces total!</p>"
        count++;
    }
    document.getElementById("qD").innerHTML += "<p>It took " + count + " rolls to get around the board!</p>"
}
diceRoll2()




// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.

function leapYear(number) {
    if (number % 400 === 0 || number % 100 != 0 && number % 4 === 0) {
        document.getElementById("qE").innerHTML = "Leap Year!";
    } else {
        document.getElementById("qE").innerHTML = "Nope, no sir.";
    }

}

document.getElementById("buttonE").addEventListener("click", function(){
  var yearInput = document.getElementById("leapYear").value;
  leapYear(yearInput);
})
