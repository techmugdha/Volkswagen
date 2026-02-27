import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  debugger;
  const navigate = useNavigate();
  const location = useLocation();

  const target = location.state?.from || 'Home';

  const SignIn = () => {
    debugger;
    // validate user
    sessionStorage.setItem('token', 'A$12#a3');
    navigate(`/${target}`);
  };

  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={SignIn}>Login</button>
    </div>
  );
}

export default Login;
