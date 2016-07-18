//constructor file
//this should contain all the methods which will check the letters guessed versus the random word

var word = require('./game.js');

word.randword(function(error,guess){
  console.log(guess);
});