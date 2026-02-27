import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import DefaultPage from './DefaultPage';
import Secure from './Secure';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';

function Dashboard() {
  return (
    <div>
      <h3>Dashboard Component</h3>
      <hr></hr>
      <Link to='/Home'>Home</Link> {' | '}
      <Link to='/About'>About</Link> {' | '}
      <Link to='/Contact'>Contact</Link> {' | '}
      <Link to='/Secure'>SecurePage</Link> {' | '}
      <hr></hr>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />

        <Route
          path='/Secure'
          element={
            <ProtectedRoute>
              <Secure />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<DefaultPage />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
