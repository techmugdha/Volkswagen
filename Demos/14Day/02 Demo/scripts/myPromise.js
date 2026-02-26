// let promise = new Promise(myXHR);

// function myXHR(f1, f2) {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let data = xhr.responseText;
//       let jsonData = JSON.parse(data);
//       let userData = jsonData.users;
//       f1(userData);
//     }
//   };
//   xhr.open('GET', 'https://dummyjson.com/users');
//   xhr.send();
// }

// function onSuccess(users) {
//   console.log(users);
// }

// function onFailure(error) {
//   console.log(error);
// }

// // promise.then(onSuccess);
// // promise.catch(onFailure);
// // promise.finally(() => {
// //   console.log('Done!!!');
// // });

// promise
//   .then(onSuccess)
//   .then(() => {
//     console.log('Another UI syntax');
//   })
//   .catch(onFailure)
//   .finally(() => {
//     console.log('Done!!!');
//   });
