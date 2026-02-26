const baseURL = 'https://jsonplaceholder.typicode.com/posts';

//  GET request, by id : // xhr.open('GET', `${baseURL}/12`);
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', baseURL);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('GET Response:', JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

//  POST request
function createData() {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', baseURL);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 201) {
      console.log('POST Response:', JSON.parse(xhr.responseText));
    }
  };

  const data = JSON.stringify({
    title: 'sample',
    body: 'This is a smaple text',
    userId: 101,
  });

  xhr.send(data); // This data will travel through http request body
}

//  PUT request
function updateData(id) {
  const xhr = new XMLHttpRequest();

  xhr.open('PUT', `${baseURL}/${id}`);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('PUT Response:', JSON.parse(xhr.responseText));
    }
  };

  const data = JSON.stringify({
    id: id,
    title: 'updated title',
    body: 'This is a updated text',
    userId: 101,
  });

  xhr.send(data); // This data will travel through http request body
}

//  DELETE request
function deleteData(id) {
  const xhr = new XMLHttpRequest();

  xhr.open('DELETE', `${baseURL}/${id}`);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(`DELETE Response: Resource id: ${id} deleted successfully.`);
    }
  };

  xhr.send();
}

// getData();
// createData();
// updateData(12);
deleteData(12);
