import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Blife } from './Blife'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Blife />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
