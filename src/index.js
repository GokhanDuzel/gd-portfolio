import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.body.addEventListener('touchmove', function(event) {
  if (document.body.scrollTop === 0) {
    document.body.classList.add('overscrolling');
  } else {
    document.body.classList.remove('overscrolling');
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

