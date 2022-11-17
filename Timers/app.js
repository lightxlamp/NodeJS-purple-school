const start = performance.now();
setTimeout(() => {
  console.log("Is 1 sec passed", performance.now() - start);
  console.log("1 second passed");
}, 1000);

function myFunc(arg) {
  console.log("Argument: ", arg);
}

setTimeout(myFunc, 3000, "arg for delayed function");

const timerId = setTimeout(() => {
  console.log("Time run out");
}, 5000);

clearTimeout(timerId);

const intervalId = setInterval(() => {
  console.log("Performance now", performance.now());
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);
