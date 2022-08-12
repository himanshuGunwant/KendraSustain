import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from 'Context';
import TestPage from 'Test/TestPage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
