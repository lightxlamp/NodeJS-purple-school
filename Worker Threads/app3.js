const factorial = require("./factorial")

const compute = (array) => {
    const arr = []
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i)

    }
    return array.map(el => factorial(el))
}

const main = () => {
    performance.mark('start')

    const resultArray = [
        compute([25, 20, 19, 33, 14, 49]),
        compute([25, 20, 19, 33, 14, 49]),
        compute([25, 20, 19, 33, 14, 49]),
        compute([25, 20, 19, 33, 14, 49]),
    ]

    console.log('resultArray', resultArray);

    performance.mark('end')
    performance.measure('main', 'start', 'end')
    console.log(performance.getEntriesByName('main').pop());
}

setTimeout(() => {
    console.log('Hey. Timeout is completed');
}, 2000);

main()