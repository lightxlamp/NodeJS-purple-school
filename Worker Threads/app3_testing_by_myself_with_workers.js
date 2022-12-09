const { Worker } = require('worker_threads')

const main = async () => {
    console.log('~start~');
    performance.mark('start')
    await Promise.all([
        compute(),
        compute(),
        compute(),
        compute(),
    ])
    performance.mark('end')
    console.log('~end~');
    performance.measure('main', 'start', 'end')
    console.log(performance.getEntriesByName('main').pop());
}

const compute = () => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./app3_my_worker.js');
        worker.on('message', (data) => {
            console.log('worker.threadID', worker.threadId);
            console.log('data', data);
            resolve(data)
        })
        worker.on('error', (err) => {
            console.log('err', err);
            reject(err)
        })
        worker.on('exit', () => {
            console.log('Work completed');
        })
    })
};

setInterval(() => {
    setTimeout(() => {
        console.log('Timeout function is not blocked');
    }, 100);
}, 5000);

main()