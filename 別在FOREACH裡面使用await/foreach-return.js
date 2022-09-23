const arr = [1, 2, 3, 4];
arr.forEach(async (val) => {
    if(val === 3){
        return;
    }
    console.log(val);
});