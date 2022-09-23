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
    return "C";
}
async function callMutiApi () {
    console.time();
    const a = await api1()
    const b = await api2()
    const c = await api3()
    console.log({ a, b, c });
    console.timeEnd();
}
callMutiApi();