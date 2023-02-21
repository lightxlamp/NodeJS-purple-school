process.on('message', (msg) => {
    console.log('Client received: ', msg);
    if (msg === 'disconnect') {
        process.disconnect();
    }
    process.send('Pong')
})