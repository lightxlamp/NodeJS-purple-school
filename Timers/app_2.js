setImmediate(() => {
  console.log("After all in a call stack");
});

console.log("Before");

console.log("After");
