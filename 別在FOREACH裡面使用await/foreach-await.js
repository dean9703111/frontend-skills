const arr = [1, 2, 3, 4];

const waitOneSec = (val) => new Promise((res, rej) => {
    setTimeout(() => { res(val) }, 1000);
})

async function test () {
    console.log('Start 🎬')

    arr.forEach(async (val) => {
        const res = await waitOneSec(val);
        console.log(res);
    });
    console.log('End 🔚')
}

test();