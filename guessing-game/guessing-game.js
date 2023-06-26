let maximum = parseInt(prompt("Enter a maximum number:"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid maximum number:"));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Please enter your first guess:"));
let attempt = 1;

while (parseInt(guess) !== targetNumber) {
    if (attempt >= 3) break;
    
    if (guess < targetNumber) {
        guess = prompt("Too low. Enter another guess:");
        attempt++;
    } else {
        guess = prompt("Too high. Enter another guess:");
        attempt++;
    }   
}

if (attempt <= 3 && parseInt(guess) === targetNumber) {
    console.log("Congrats! You won. ");
    console.log("It took you " + attempt + " attemps :)");
} else {
    console.log("You have run out of attempts.")
}