
import { ThemeContext } from '../context/ThemeContext'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header({toggleCarrinho }) {

  const { carrinho } = useContext(CartContext)
  const { darkMode, toggleTheme } = useContext(ThemeContext)
  return (

    <header>

      <h1>HBurguer</h1>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/sobre">Sobre</Link>
        <Link to="/admin">Admin</Link>

      </nav>

   <div
  className="theme-icon"
  onClick={toggleTheme}
>
  {darkMode ? '☀️' : '🌙'}
</div>

   <div
  className="cart-icon"
  onClick={toggleCarrinho}
>

  🛒 {carrinho.length}

</div>

    </header>

  )

}

export default Header