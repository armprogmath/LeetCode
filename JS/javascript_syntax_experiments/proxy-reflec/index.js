let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise.then((value) => {
    console.log(value); // logs 'Success!' after 1 second
});