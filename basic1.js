// ================ HANGMAN GAME =======================================

/*  Pick a random word
    WHILE the word has not been guessed {
        Show the player current progress
        Get a guess from the player
        IF the player wants to quict the game {
            Quit the game
        }
        ELSE IF the guess is not a single letter {
            Tell the player to pick a single letter
        } 
        ELSE {
            IF the guess is in the word {
                Update the player's progress with the guess
            }
        }
    }
Congratulate the player on guessing the word! */

let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
]
// Pick a random word
let word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;

// The game loop
while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Get a guess from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);