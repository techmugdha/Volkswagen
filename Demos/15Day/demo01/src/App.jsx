import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const onTextChangeHandler = (e) => {
    // debugger;
    // console.log(e.target.value);
    // console.log(e.target.name);

    setName(e.target.value);
  };
  const handleNameChange = () => {
    setDisplayName(name);
  };

  return (
    <div className='container'>
      <div className='row col-8 p-3'>
        <span className='text-danger fs-3 fw-bold'>
          Name: {name || 'No name entered'}
          <br></br>
          Display Name: {displayName || 'No name entered'}
        </span>
      </div>
      <div className='row col-8 p-3'>
        <label htmlFor='unm' className='form-control'>
          Enter Name:
        </label>
        <input
          type='text'
          id='unm'
          name='uname'
          className='form-control mt-3'
          placeholder='Enter your name'
          onChange={onTextChangeHandler}
        />
        <button
          className='btn btn-primary p-3 text-white mt-4'
          onClick={handleNameChange}
        >
          Change Name
        </button>
      </div>
    </div>
  );
}

export default App;
