import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Blife } from './Blife'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { CartProvider } from './hooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Blife />
        </BrowserRouter>
      </Provider>
    </CartProvider>
  </React.StrictMode>,
)
