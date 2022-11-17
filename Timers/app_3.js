const timerId = setTimeout(() => {
  console.log("Time run out");
}, 5000);

timerId.unref();

setImmediate(() => {
  timerId.ref();
});
