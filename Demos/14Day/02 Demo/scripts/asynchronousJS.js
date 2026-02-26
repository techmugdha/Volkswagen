async function display() {
  let myPromiseObj = new Promise((resolve, reject) => {
    // if(myPromiseObj.state === "fullfilled")
    resolve('This is a successfull response output...');
  });
  let myResult = await myPromiseObj;
  return myResult;
}

display()
  .then((value) => {
    document.getElementById('root').innerHTML = value;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('done with code..');
  });
