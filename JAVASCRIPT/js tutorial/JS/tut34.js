console.log('tutorial 34')

//asynchronous coding
setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        const element = i;
        console.log('this is index number'+i)
    }
}, 100);
console.log('done printing')