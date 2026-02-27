import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import EmpData from './components/EmpData.jsx';
import DemoEmps from './components/DemoEmps.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <EmpData /> */}
    {/* <App /> */}
    <DemoEmps />
  </StrictMode>,
);
