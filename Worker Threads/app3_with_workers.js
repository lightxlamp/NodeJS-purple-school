const factorial = require("./factorial")
const { Worker } = require('worker_threads')

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        });
        worker.on('message', (msg) => {
            console.log('worker.threadID', worker.threadId);
            resolve(msg)
        })
        worker.on('error', (err) => {
            console.log('err', err);
            reject(err)
        })
        worker.on('exit', () => {
            console.log('Work completed');
        })
    })
}

const main = async () => {
    try {
        performance.mark('start')
        const resultArray = await Promise.all([
            compute([25, 20, 19, 33, 14, 49]),
            compute([25, 20, 19, 33, 14, 49]),
            compute([25, 20, 19, 33, 14, 49]),
            compute([25, 20, 19, 33, 14, 49]),
        ])

        console.log('resultArray', resultArray);

        performance.mark('end')
        performance.measure('main', 'start', 'end')
        console.log(performance.getEntriesByName('main').pop());
    }
    catch (e) {
        console.error(e.message)
    }
}

setTimeout(() => {
    console.log('Hey. Timeout is completed');
}, 2000);

main()