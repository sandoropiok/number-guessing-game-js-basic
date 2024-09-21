const readline = require('readline-sync');

console.clear();

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 10; // Set the maximum number of attempts
let attempts = 0; // Initialize attempts counter

console.log("Try to guess a number between 1 and 100!");

while (attempts < maxAttempts) {
  // Prompt the player to guess the number
  const guess = readline.question("Enter a number between 1 and 100:\n ");
  const guessNumber = parseInt(guess);

  // Increment the attempts counter
  attempts++;

  // Check if the input is a number
  if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
    console.log("Please enter a valid number between 1 and 100.");
    attempts--; // Do not count invalid guesses towards the limit
    continue; // Skip the rest of the loop
  }

  // Provide feedback on the guess
  console.log(`\n`);
  console.log(`Your guess: ${guessNumber}`);

  if (guessNumber === randomNumber) {
    console.log("\n");
    console.log(`Congratulations, you won!`);
    break; // Exit the loop if the guess is correct
  } else if (guessNumber < randomNumber) {
    console.log("Wrong! Try with a higher number.");
  } else {
    console.log("Wrong! Try with a lower number.");
  }

  // Inform the player of remaining attempts
  const remainingAttempts = maxAttempts - attempts;
  if (remainingAttempts > 0) {
    console.log(`You have ${remainingAttempts} attempts left.\n`);
  } else {
    console.log(
      `Sorry, you've run out of attempts! The number was ${randomNumber}.`
    );
  }
}

console.log("Thanks for playing!");
