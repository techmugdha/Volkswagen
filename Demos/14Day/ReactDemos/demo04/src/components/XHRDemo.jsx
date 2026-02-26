import { Component } from 'react';

class XHRDemo extends Component {
  state = {
    data: [],
    singleuser: { id: '', firstname: '', lastname: '' },
  };
  componentDidMount = () => {
    const baseUrl = 'https://dummyjson.com/users';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const replyFromServer = xhr.responseText;
        const replyInJSONFormat = JSON.parse(replyFromServer);
        const usersArray = replyInJSONFormat.users.map((user) => {
          return {
            id: user.id,
            firstname: user.firstName,
            lastname: user.lastName,
          };
        });
        // console.log(usersArray);
        this.setState({ data: usersArray });
      }
    };
    xhr.open('GET', baseUrl);
    xhr.send();
  };
  render() {
    return (
      <div>
        <h1>Emp Data:</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>first Name</th>
              <th>last Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default XHRDemo;
