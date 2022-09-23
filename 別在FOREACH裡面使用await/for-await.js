const arr = [1, 2, 3, 4]

const waitOneSec = (val) => new Promise((res, rej) => {
    setTimeout(() => { res(val) }, 1000);
})

async function test () {
    console.log('Start 🎬')

    for (let i = 0; i < arr.length; i++) {
        const res = await waitOneSec(arr[i]);
        console.log(res);
    }
    console.log('End 🔚')
}

test();