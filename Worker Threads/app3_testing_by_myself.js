function heavy() {
    for (let i = 0; i < 10000000000; i++) {
        // do nothing
    }
}

const main = () => {
    performance.mark('start')
    heavy()

    performance.mark('end')
    performance.measure('main', 'start', 'end')
    console.log(performance.getEntriesByName('main'));
}

setTimeout(() => {
    console.log('Timeout function is blocked');
}, 2000);

main()