import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmpData() {
  // state= {data:[]} --- useState()--> allows us to track state in functional component
  // state--> setState({data: newcollection})

  const [users, setUsers] = useState([]);
  // const [empname, setEmpName] = useState('Hugh')

  // componentDidMount()-> once/ first
  useEffect(() => {
    // XHR->fetch for first and last time from server app
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let data = xhr.responseText;
        let jsonData = JSON.parse(data);
        setUsers(jsonData.photos);
      }
    };
    xhr.open('GET', 'https://api.slingacademy.com/v1/sample-data/photos');
    xhr.send();
  }, []);

  return (
    <div className='conatiner my-4'>
      <div className='row'>
        {users.map((user) => {
          return (
            <div className='card' style={{ width: '18rem' }} key={user.id}>
              <img className='card-img-top' src={user.url} alt={user.user} />
              <div className='card-body'>
                <h5 className='card-title'>{user.title}</h5>
                <p className='card-text'>{user.description}</p>
                <a href={user.url} className='btn btn-primary'>
                  View Photo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmpData;
