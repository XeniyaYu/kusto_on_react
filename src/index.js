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
    {/* <script>
            let editButton = document.querySelector('.profile__info__edit-button__button');
            let closeButton = document.querySelector('.close-button');
            let saveButton = document.querySelector('.edit-profile__save-button');
            let editBlock = document.querySelector('.edit-profile');
            editButton.addEventListener('click', function (e) {
                editBlock.classList.toggle('visible');

            });
            editButton.addEventListener('click', function () {
                closeButton.classList.toggle('visible')
            });
            closeButton.addEventListener('click', function () {
                    editBlock.classList.remove('visible');
                    closeButton.classList.remove('visible');
                }
            )
            
            
        </script> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
