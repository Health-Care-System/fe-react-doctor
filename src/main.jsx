import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/bootstrap.config.scss'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App/>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
