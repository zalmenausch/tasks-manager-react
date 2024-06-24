import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let rootElement = document.getElementById('root-element');

let reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(<App />);