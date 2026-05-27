import Admin from './pages/Admin'
import Product from './pages/Product'
import Toast from './components/Toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Header'
import Cart from './components/Cart'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

function App() {

  const [carrinho, setCarrinho] = useState(() => {

  const carrinhoSalvo = localStorage.getItem('hburguer-cart')

  return carrinhoSalvo
    ? JSON.parse(carrinhoSalvo)
    : []

})
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const [toast, setToast] = useState('')

  function toggleCarrinho(){

  setCarrinhoAberto(!carrinhoAberto)

}

  function adicionarCarrinho(burger){

  setCarrinho((prev) => [...prev, burger])

  setToast(`${burger.nome} adicionado!`)

  setTimeout(() => {

    setToast('')

  }, 3000)

}

  function removerCarrinho(index){

  setCarrinho((prev) =>

    prev.filter((_, i) => i !== index)

  )
  }

  useEffect(() => {

  localStorage.setItem(
    'hburguer-cart',
    JSON.stringify(carrinho)
  )

}, [carrinho])



  return (

    <BrowserRouter>

 <Header
  toggleCarrinho={toggleCarrinho}
/>

{
  carrinhoAberto && (

    <Cart
      carrinho={carrinho}
      removerCarrinho={removerCarrinho}
    />

  )
}


{
  toast && (

    <Toast mensagem={toast} />

  )
}

      <Routes>

        <Route
          path="/"
          element={
            <Home />
          }
        />

        <Route
          path="/sobre"
          element={<Sobre />}
        />

        <Route
          path="/produto/:id"
          element={<Product />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App