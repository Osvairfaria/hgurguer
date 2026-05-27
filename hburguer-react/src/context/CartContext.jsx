import {

  createContext,

  useState,

  useEffect

} from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {

  const [carrinho, setCarrinho] = useState(() => {

    const carrinhoSalvo = localStorage.getItem('hburguer-cart')

    return carrinhoSalvo
      ? JSON.parse(carrinhoSalvo)
      : []

  })

  useEffect(() => {

    localStorage.setItem(

      'hburguer-cart',

      JSON.stringify(carrinho)

    )

  }, [carrinho])

  function adicionarCarrinho(burger){

    setCarrinho((prev) => [...prev, burger])

  }

  function removerCarrinho(index){

    setCarrinho((prev) =>

      prev.filter((_, i) => i !== index)

    )

  }

  return (

    <CartContext.Provider

      value={{

        carrinho,

        adicionarCarrinho,

        removerCarrinho

      }}

    >

      {children}

    </CartContext.Provider>

  )

}

export default CartProvider