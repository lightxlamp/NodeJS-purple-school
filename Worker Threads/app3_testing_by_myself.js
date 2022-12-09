isDone = false
const limit = 10000000000;
function heavy() {
    for (let i = 0; i <= limit; i++) {
        if (i === limit) {
            isDone = true
        }
    }
}

const main = () => {
    performance.mark('start')
    heavy()
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