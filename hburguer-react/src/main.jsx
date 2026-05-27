import './styles/index.css'
import ThemeProvider from './context/ThemeContext'
import CartProvider from './context/CartContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeProvider>
  <CartProvider>

  <App />

  </CartProvider>
</ThemeProvider>,
)