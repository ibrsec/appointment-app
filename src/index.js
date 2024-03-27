import React from 'react';
import ReactDOM from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import App from './App'; 
import {GlobalProvider} from './components/context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <GlobalProvider>
    <App /> 
  </GlobalProvider>

); 