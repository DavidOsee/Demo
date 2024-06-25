import React from 'react'
import ReactDOM from 'react-dom/client'
import {store} from '../app/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import { ThemeProvider } from "@material-tailwind/react";

import './index.css'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
