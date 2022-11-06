const { characters, stealRing, showCharacters } = require("./characters.js");

let myCharacters = characters;
myCharacters = stealRing(myCharacters, "Bilbo");
showCharacters();
