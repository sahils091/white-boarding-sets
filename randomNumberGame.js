// <!-- <!doctype html>

// <html lang="en">

// <head>
//   <meta charset="utf-8">
//   <title>Javascript Fundamentals</title>
//   <style>
//     html {
//       font-family: sans-serif;
//     }

//     body {
//       width: 50%;
//       max-width: 800px;
//       min-width: 480px;
//       margin: 0 auto;
//     }

//     .lastResult {
//       color: white;
//       padding: 3px;
//     }
//   </style>
// </head>

// <body>
//   <h1>Refresh to run your javascript</h1>
//   <script src="script.js"></script>

//   <h1>Number guessing game</h1>

//   <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if
//     your guess was too high or too low.</p>

//   <div class="form">
//     <label for="guessField">Enter a guess: </label>
//     <input type="text" id="guessField" class="guessField">
//     <input type="submit" value="Submit guess" class="guessSubmit">
//   </div>

//   <div class="resultParas">
//     <p class="guesses"></p>
//     <p class="lastResult"></p>
//     <p class="lowOrHi"></p>
//   </div>

//   <script>
//       //I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.


// 	//generate a  random number between 1-100 -store it
// 	// start the game, player gets s10 chances, 
// 	// record the input, and print the choice 

// 	// if player got the number correct -- end the game, print the congratulations message , disable the button to submit more choices.  display the option to start the game.

// 	// if number now correct increment the chances record /print the input and display a hint for the player to guess the number. 

//       // Your JavaScript goes here

//     let randomNumber = Math.floor(Math.random()* 100) + 1;
    
//     const guesses = document.querySelector(".guesses");
//     const lastResult = document.querySelector(".lastResult");
//     const lowOrHi = document.querySelector(".lowOrHi");
//     const guessSubmit = document.querySelector('.guessSubmit');
//     const guessField = document.querySelector('.guessField');

//     let guessCount = 1;
//     let resetButton;
//     guessField.focus();

//   //  function resetGame() {
//   //   guessCount = 1;
//   //   const resetParas = document.querySelectorAll('.resultParas');
//   //   for (let i =0; i < resetParas.length; i++) {
//   //     resetParas[i].textContent = '';
//   //   }
    
//   //   resetButton.parentNode.removeChild(resetButton);
//   //   guessField.disabled = false;
//   //     guessSubmit.disabled = false;
//   //     guessField.value = '';
//   //     guessField.focus();
//   //     lastResult.style.backgroundColor = 'white';

//   //     randomNumber = Math.floor(Math.random() * 100) + 1;
//   //  }



//     // function setGameOver() {
//     //   guessField.disabled = true;
//     //   guessSubmit.disabled = true;
//     //   resetButton = document.createElement("button");
//     //   resetButton.textContent = "Start A new Game"
//     //   document.body.append(resetButton);
//     //   resetButton.addEventListener('click', resetGame);
//     // }
   
//     function checkGuess() {
//   let userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = 'Previous guesses: ';
//   }
//   guesses.textContent += userGuess + ' ';
 
//   if (userGuess === randomNumber) {
//     lastResult.textContent = 'Congratulations! You got it right!';
//     lastResult.style.backgroundColor = 'green';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = '!!!GAME OVER!!!';
//     setGameOver();
//   } else {
//     lastResult.textContent = 'Wrong!';
//     lastResult.style.backgroundColor = 'red';
//     if(userGuess < randomNumber) {
//       lowOrHi.textContent = 'Last guess was too low!';
//     } else if(userGuess > randomNumber) {
//       lowOrHi.textContent = 'Last guess was too high!';
//     }
//   }
 
//   guessCount++;
//   guessField.value = '';
//   guessField.focus();
// }

//    guessSubmit.addEventListener('click', checkGuess);


//    function setGameOver() {
//       guessField.disabled = true;
//       guessSubmit.disabled = true;
//       resetButton = document.createElement("button");
//       resetButton.textContent = "Start A new Game"
//       document.body.append(resetButton);
//       resetButton.addEventListener('click', resetGame);
//     }

//     function resetGame() {
//     guessCount = 1;
//     const resetParas = document.querySelectorAll('.resultParas');
//     for (let i =0; i < resetParas.length; i++) {
//       resetParas[i].textContent = '';
//     }
    
//     resetButton.parentNode.removeChild(resetButton);
//     guessField.disabled = false;
//       guessSubmit.disabled = false;
//       guessField.value = '';
//       guessField.focus();
//       lastResult.style.backgroundColor = 'white';

//       randomNumber = Math.floor(Math.random() * 100) + 1;
//    }

//   </script>
// </body>

// </html> --></body>