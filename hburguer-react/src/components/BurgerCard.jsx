import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function BurgerCard(props) {

  return (

    <div className="burger-card">

     <Link to={`/produto/${props.id}`}>

  <img src={props.imagem} alt={props.nome} />

</Link>

      <div className="burger-content">

      <Link to={`/produto/${props.id}`}>

        <h3>{props.nome}</h3>

      </Link>

        <p>{props.descricao}</p>

        <span>{props.preco}</span>

        <button onClick={() => adicionarCarrinho(props)}>
          Comprar Agora
        </button>

      </div>

    </div>

  )
}

export default BurgerCard