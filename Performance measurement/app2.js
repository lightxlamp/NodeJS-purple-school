const perf_hooks = require('perf_hooks')
const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries())
    const entry = items.getEntriesByName('slowFunctionMeasurement').pop()
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
});

performanceObserver.observe({ entryTypes: ['measure', 'function'] })

function test() {
    const arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i)
    }
}

test = perf_hooks.performance.timerify(test) // "wrap" function with functionality measurement  

function slow() {
    performance.mark('start')
    const arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i)
    }
    performance.mark('end')
    performance.measure('slowFunctionMeasurement', 'start', 'end')
}

slow()
test()