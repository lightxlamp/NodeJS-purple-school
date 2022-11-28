const fs = require('fs')

console.log('Initialize')

setTimeout(() => {
    console.log(performance.now(), 'Time 0')
}, 500)

setTimeout(() => {
    for(let i = 0; i < 10000000000; i++ ) {

    }
    console.log('Done')
}, 0)

setImmediate(() => {
    console.log('Immediate')
})

fs.readFile(__filename, () => {
    console.log('File read')
})



console.log('Final')