import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import  {BrowserRouter}  from 'react-router-dom';
import "../src/assets/media/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);


