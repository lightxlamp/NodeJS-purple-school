
function slow() {
    performance.mark('start')
    const arr = [];
    for(let i = 0; i < 100000000; i++) {
        arr.push(i * i)
    }
    performance.mark('end')
    performance.measure('slowFunctionMeasurement', 'start', 'end')
    const measurement = performance.getEntriesByName('slowFunctionMeasurement')
    console.log(measurement)
}

slow()