var asyncAdd = (a, b) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject("a and b must be numbers!")
            }

        }, 1500)

    });
}

asyncAdd(2, 4).then((message) => {
    console.log("Result = " + message);
    return asyncAdd(message, 5).then((result) => {
        console.log("Other Result: " + result)
    });
}).catch((errorMessage) => {
    console.log("ERROR = " + errorMessage);
});


// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey! it worked!');
//         reject('Oh... It failed... :( ');
//     }, 2500);



// });

// somePromise.then((message) =>{
//     console.log('SUCCESS: ' + message)
// }).catch((error) => {
//     console.log(error);  
// });