let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;
let currentAttempt = 1;

function makeGuess() {
    let userGuess = document.getElementById('userGuess').value;
    let message = '';

    if (currentAttempt <= 5) {
        if (userGuess == randomNumber) {
            message = 'Congratulations! You guessed the right number!';
            attempts = 0; // End the game
        } else if (userGuess > randomNumber) {
            message = 'Too high! Try again.';
            attempts--;
        } else if (userGuess < randomNumber) {
            message = 'Too low! Try again.';
            attempts--;
        }

        currentAttempt++;
    }

    if (currentAttempt > 5 && userGuess != randomNumber) {
        message = `Sorry, you've used all your attempts. The correct number was ${randomNumber}.`;
        attempts = 0; // End the game
    }
    
    document.getElementById('message').innerText = message;
    document.getElementById('guessCount').innerText = currentAttempt > 5 ? 5 : currentAttempt;
    document.getElementById('attemptsLeft').innerText = `Attempts left: ${attempts}`;
    
    if (attempts == 0) {
        document.getElementById('userGuess').disabled = true;
        document.querySelector('button').disabled = true;
    }
}