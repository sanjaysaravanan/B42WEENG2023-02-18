// Immediate Promise Actions

// const sleepPromise = new Promise((resolve, reject) => {
//   resolve('I slept for 8hrs today');
//   // reject('I did not sleep since, I was studying for exam');
// });

// console.log(sleepPromise);


// Async promise Actions
// const sleepPromiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('I slept for 8hrs today');
//     reject('I did not sleep since, I was studying for exam')
//   }, 8000);
// });

// console.log(sleepPromiseTwo); // console.log will log only current state 

var username = 'sanjay';
var password = 'admin'

// const loginPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (username === 'sanjay' && password === 'admin') {
//       resolve({
//         name: 'Sanjay Saravanan',
//         role: 'Mentor',
//         batch: 'B42WEENG',
//         id: '123'
//       });
//     } else {
//       reject({ error: 'invalid username or password' })
//     }
//   }, 5000);
// });

// console.log(loginPromise);

// loginPromise
//   .then((response) => {
//     console.log('Promise 1');
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // resolve({ innerPomise: response });
//         reject({ msg: 'innerPromise rejected' });
//       }, 2000);
//     });
//   })
//   .then((promise2Response) => {
//     console.log(promise2Response);
//   })
//   .catch((errorReponse) => {
//     console.log(errorReponse);
//   });


// Building a house
// const basement = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({ msg: 'Basement Completed' });
//   }, 3000)
// });

// basement.then((response) => {
//   console.log(response);
//   const buildingPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ msg: 'Building Completed' });
//     }, 3000)
//   });
//   return buildingPromise;
// }).catch((errRes) => {
//   console.log(errRes)
// });



// Building is ready
const outdoorWork = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Outdoor Done')
    reject('Terrace workers on leave');
  }, 2000);
});
const indoorWork = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('InDoor Done')
    reject('Terrace workers on leave');
  }, 5000);
});

const terraceWork = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('terrace Work Done')
    reject('Terrace workers on leave');
  }, 1000);
});

Promise.all([outdoorWork, indoorWork, terraceWork]) // array of promises
  .then((value) => { // array of values
    // values.forEach((value) => {
    //   console.log(value);
    // });
    console.log(value)
    console.log('All building works are Done');
  })
  .catch((errRes) => {
    console.log(errRes)
  })
  .finally(() => {
    console.log('I dont care failure or succes, I will get executed every time ')
  })

// console.log('Line 49');