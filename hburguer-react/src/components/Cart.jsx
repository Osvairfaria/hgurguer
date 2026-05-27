
import '../styles/cart.css'

function Cart({ carrinho, removerCarrinho }) {

  const total = carrinho.reduce((acc, item) => {

    const preco = Number(
      item.preco
        .replace('R$', '')
        .replace(',', '.')
    )

    return acc + preco

  }, 0)

  return (

    <div className="cart">

      <h2>
        Carrinho ({carrinho.length})
      </h2>

      {carrinho.map((item, index) => (

        <div className="cart-item" key={index}>

          <p>{item.nome}</p>

         <div className="cart-info">

  <span>{item.preco}</span>

  <button
    onClick={() => removerCarrinho(index)}
  >
    ✖
  </button>

</div>

        </div>

      ))}

      <h3>
        Total: R$ {total.toFixed(2)}
      </h3>

    </div>

  )
}

export default Cart