import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Dashboard from './components/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>,
);
