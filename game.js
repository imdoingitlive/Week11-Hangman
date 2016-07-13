//this file will randomly select a word for the player
var randword = require('randword');

randword(function(error, word){
  console.log(word);
});