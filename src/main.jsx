import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LinkStatusProvider from "./LinkStatusContext/LinkStatusProvider"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LinkStatusProvider>
      <App />
    </LinkStatusProvider>
  </React.StrictMode>,
)
