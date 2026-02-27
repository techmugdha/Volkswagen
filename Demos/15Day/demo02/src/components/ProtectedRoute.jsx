import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  debugger;
  let loginToken = sessionStorage.getItem('token');
  if (
    loginToken !== null &&
    loginToken !== undefined &&
    loginToken !== '' &&
    loginToken === 'A$12#a3'
  ) {
    return <div>{children}</div>;
  } else {
    // Pass the targeted component name via state
    return (
      <Navigate
        to='/Login'
        replace={true}
        state={{ from: children.type.name }}
      />
    );
  }
}

export default ProtectedRoutes;
