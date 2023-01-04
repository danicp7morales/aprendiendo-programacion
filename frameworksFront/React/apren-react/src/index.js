import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import AppF from './AppF';
//import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
//import AppEst from './AppEst';
//import AppHooks from './AppHooks';
//import App from './App';
import AppMusic from './AppMusic';
//import AppFrameworks from './AppFrameworks';

//CONECTAMOS MI INDEX CON EL ROOT DE HTML Y MI APP
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store = {store}> 
      <BrowserRouter>
        <AppMusic  />
      </BrowserRouter>
    </Provider>
  </>
);


