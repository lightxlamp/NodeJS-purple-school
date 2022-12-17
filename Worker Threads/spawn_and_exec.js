const { exec } = require('child_process')

const childProcess = exec('ls', (err, stdout, stderr) => {
    if (err) {
        console.error(err.message)
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})

childProcess.on('exit', (code) => {
    console.log('Exit code', code);
})

// Another way
console.log('============================');

const { spawn } = require('child_process')

const childProcess2 = spawn('ls')

childProcess2.stdout.on('data', (data) => {
    console.log('Stdout', data);
})

childProcess2.stderr.on('data', (data) => {
    console.log('Stderr', data);
})

childProcess2.on('exit', (code) => {
    console.log('Exit code', code);
})