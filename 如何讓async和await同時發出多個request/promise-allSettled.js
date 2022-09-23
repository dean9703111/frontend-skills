const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));
async function api1 () {
    await waitFor(500);
    return "A";
}
async function api2 () {
    await waitFor(500);
    return "B";
}
async function api3 () {
    await waitFor(500);
    throw "error"; // 丟出錯誤訊息
}
async function callMutiApi () {
    console.time();
    const promises = [
        api1(),
        api2(),
        api3(),
    ];
    Promise.allSettled(promises).then(values => {
        console.log(values);
        console.timeEnd();
    });
}
callMutiApi();