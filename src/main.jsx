import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import { StateContextProvider } from './context/StateContextProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
      <App/>
    </StateContextProvider>
  </React.StrictMode>
)
