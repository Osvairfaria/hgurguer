import '../styles/product.css'
import burgers from '../data/burgers'
import { useParams } from 'react-router-dom'

function Product() {

  const { id } = useParams()
const produto = burgers.find(

  (burger) => burger.id === Number(id)

)

  return (

  <section className="product-page">

    <img
      src={produto.imagem}
      alt={produto.nome}
    />

    <div className="product-content">

      <h1>{produto.nome}</h1>

      <p>{produto.descricao}</p>

      <h2>{produto.preco}</h2>

      <button>
        Comprar Agora
      </button>

    </div>

  </section>

)

}

export default Product