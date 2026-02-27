// import Login from './Login';
// import Secure from './Secure';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  debugger;
  // id user auth?
  let logintoken = sessionStorage.getItem('token');
  if (
    logintoken !== null &&
    logintoken !== undefined &&
    logintoken !== '' &&
    logintoken === 'A#12$a3'
  ) {
    debugger;
    return <div>{children}</div>;
  } else {
    debugger;
    return (
      <Navigate
        to='/Login'
        replace={true}
        state={{ from: children.type.name }}
      />
    );
  }
}

export default ProtectedRoute;
