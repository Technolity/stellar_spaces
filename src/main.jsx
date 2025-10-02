import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Index.css'  // Regular CSS import, NOT from './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)