// let baseURL = 'https://dummyjson.com/users';

// function myXHR(f1, f2) {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let data = xhr.responseText;
//       let jsonData = JSON.parse(data);
//       let userData = jsonData.users;
//       f1(userData);
//     }
//     // else{
//     //   f2('Error')
//     // }
//   };
//   xhr.open('GET', baseURL);
//   xhr.send();
// }

// function onSuccess(users) {
//   console.log(users);
// }

// function onFailure(error) {
//   console.log(error);
// }

// // myXHR(onSuccess, onFailure);
