const { Worker } = require('worker_threads')

const main = () => {
    performance.mark('start')
    const worker = new Worker('./app3_my_worker.js')
    worker.on('message', (data) => {
        console.log('data', data);
    })
    performance.mark('end')
    performance.measure('main', 'start', 'end')
    console.log(performance.getEntriesByName('main'));
}

setInterval(() => {
    setTimeout(() => {
        console.log('Timeout function is not blocked');
    }, 100);
}, 5000);

main()