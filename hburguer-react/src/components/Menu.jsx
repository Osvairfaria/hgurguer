import burgers from '../data/burgers'
import { useEffect, useState } from 'react'

import '../styles/menu.css'

import BurgerCard from './BurgerCard'
import Modal from './Modal'

function Menu({ adicionarCarrinho }) {

  const [burgerSelecionado, setBurgerSelecionado] = useState(null)


  function abrirModal(burger){

    setBurgerSelecionado(burger)

  }

  function fecharModal(){

    setBurgerSelecionado(null)

  }

const [burgers, setBurgers] = useState([])
const [filtro, setFiltro] = useState('todos')

const [loading, setLoading] = useState(true)
const [busca, setBusca] = useState('')

useEffect(() => {

  fetch('/burgers.json')

    .then((response) => response.json())

    .then((data) => {

      setBurgers(data)

      setLoading(false)

    })

}, [])

const burgersFiltrados = burgers.filter((burger) => {

  const filtroCategoria =

    filtro === 'todos'
    || burger.categoria === filtro

  const filtroBusca =

    burger.nome.toLowerCase().includes(
      busca.toLowerCase()
    )

  return filtroCategoria && filtroBusca

})

if(loading){

  return <h2>Carregando burgers...</h2>

}

  return (

    <section className="menu">

      <h2>Nosso Cardápio</h2>

<input
  type="text"

  placeholder="Buscar burger..."

  className="search"

  value={busca}

  onChange={(e) => setBusca(e.target.value)}
/>

<div className="filters">

  <button onClick={() => setFiltro('todos')}>
    Todos
  </button>

  <button onClick={() => setFiltro('tradicional')}>
    Tradicional
  </button>

  <button onClick={() => setFiltro('smash')}>
    Smash
  </button>

  <button onClick={() => setFiltro('bacon')}>
    Bacon
  </button>

</div>

      <div className="menu-grid">

        {burgersFiltrados.map((burger) => (

          <BurgerCard
            key={burger.id}
            id={burger.id}

            nome={burger.nome}
            descricao={burger.descricao}
            preco={burger.preco}
            imagem={burger.imagem}

            abrirModal={abrirModal}

          />

        ))}

      </div>

      <Modal
        burger={burgerSelecionado}
        fecharModal={fecharModal}
      />

    </section>

  )
}

export default Menu