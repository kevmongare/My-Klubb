import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "./login"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className='bg-gray-100'>
      
        <App />
    </div>
    </BrowserRouter>
  </StrictMode>
);

