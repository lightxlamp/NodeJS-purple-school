const { fork } = require('child_process')

const forkProcess = fork('fork_process.js')

forkProcess.on('message', (msg) => {
    console.log('Message received: ', msg);
})

forkProcess.on('close', (statusCode) => {
    console.log(`Exited: ${statusCode}`);
})

forkProcess.send('Ping ')
forkProcess.send('disconnect')