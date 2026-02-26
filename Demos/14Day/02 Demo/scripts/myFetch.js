// function myFetch(method, url) {
//   let promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         let data = xhr.responseText;
//         let jsonData = JSON.parse(data);
//         let userData = jsonData.users;
//         resolve(userData);
//       }
//     };

//     xhr.open(method, url);
//     xhr.send();
//   });

//   return promise;
// }

// function onResolved(users) {
//   console.log(users);
// }

// function onRejected(error) {
//   console.log(error);
// }

// myFetch('GET', 'https://dummyjson.com/users')
//   .then(onResolved)
//   .catch(onrejectionhandled)
//   .finally(() => {
//     console.log('Done!...');
//   });
