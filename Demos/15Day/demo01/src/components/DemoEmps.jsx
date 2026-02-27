import { useEffect, useState } from 'react';
import ShowEmp from './ShowEmp';

function DemoEmps() {
  const [userData, setUserData] = useState([]);
  const [singleUser, setSingleUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const baseURL = 'https://dummyjson.com/users';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let data = xhr.responseText;
        let jsonData = JSON.parse(data);
        const userArray = jsonData.users.map((user) => {
          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
          };
        });
        setUserData(userArray);
      }
    };
    xhr.open('GET', baseURL);
    xhr.send();
  }, []);

  const onTextChange = (e) => {
    const copyOfSingleUser = { ...singleUser };
    copyOfSingleUser[e.target.name] = e.target.value;
    setSingleUser(copyOfSingleUser);
  };
  const AddNewUser = () => {
    const copyOfSingleUser = { ...singleUser };
    const copyOfUserData = [...userData];
    copyOfUserData.push(copyOfSingleUser);

    setUserData(copyOfUserData);
    setSingleUser({
      id: '',
      firstName: '',
      lastName: '',
    });
  };

  const remove = (id) => {
    const filteredUserData = userData.filter((user) => user.id !== id);
    setUserData(filteredUserData);
  };

  return (
    <>
      <input
        type='text'
        name='id'
        onChange={onTextChange}
        placeholder='Enter user id'
        value={singleUser.id}
      />
      <br></br>
      <input
        type='text'
        name='firstName'
        onChange={onTextChange}
        placeholder='Enter user first name'
        value={singleUser.firstName}
      />
      <br></br>
      <input
        type='text'
        name='lastName'
        onChange={onTextChange}
        placeholder='Enter user flast name'
        value={singleUser.lastName}
      />
      <br></br>
      <button onClick={AddNewUser}>Add New User</button>
      <hr></hr>
      <div>
        <h1>User Data:</h1>
        <ul>
          {userData.map((user) => {
            return <ShowEmp userData={user} remove={remove} key={user.id} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default DemoEmps;
