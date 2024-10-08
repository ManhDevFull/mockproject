import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import AllReducers from "./Redux/Reducers/Index"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

const store = createStore(AllReducers)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
reportWebVitals()
