const { parentPort } = require('worker_threads')

isDone = false
const limit = 1000000000;
function heavy() {
    for (let i = 0; i <= limit; i++) {
        if (i === limit) {
            isDone = true
        }
    }
}

heavy()

parentPort.postMessage(isDone)