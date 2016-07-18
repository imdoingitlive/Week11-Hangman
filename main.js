//this will contain the logic for the app
//running this in terminal will start the game
//this app should end when the player guesses the correct word or runs out of guesses
var inquirer = require('inquirer');

var playGame = function(){
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: "Let's play some Hangman!",
      choices: ['Yes','No']
    }
  ]).then(function(user){
    if (user.choice === 'Yes'){
      console.log("Awesome! Let's Play!");
    }
    else {
      console.log("Bye! Let's play later!");
    }
  });
};

playGame();