import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/index.css';

import reportWebVitals from './reportWebVitals';

import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
