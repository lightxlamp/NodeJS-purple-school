const characters = [
  {
    name: "Frodo",
    hasRing: false,
  },
  {
    name: "Bilbo",
    hasRing: false,
  },
];

function stealRing(characters, owner) {
  return characters.map((c) => {
    if (c.name == owner) {
      c.hasRing = true;
    } else {
      c.hasRing = false;
    }
  });
}

function showCharacters() {
  for (const c of characters) {
    console.log(c);
  }
}

module.exports = {
  characters,
  stealRing,
  showCharacters,
};
