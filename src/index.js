import ReactDOM from 'react-dom/client';
import React from 'react';
import { HashRouter} from 'react-router-dom';


import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>)