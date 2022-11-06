import * as char from "./characters.mjs";
// import { characters, greet } from "./characters.mjs";
import someDefault from "./characters.mjs";

for (const c of char.characters) {
  char.greet(c);
}

// for (const c of characters) {
//   greet(c);
// }

someDefault();

char.default();

console.log(char);

console.log(".......");

// The third was =D

import log, { characters, greet } from "./characters.mjs";

log();

for (const c of characters) {
  greet(c);
}

import someDefault2, * as char2 from "./characters.mjs";
someDefault2();
for (const c of char2.characters) {
  greet(c);
}
