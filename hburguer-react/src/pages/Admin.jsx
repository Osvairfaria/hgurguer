import '../styles/admin.css'
import { useState } from 'react'

function Admin() {

    const [nome, setNome] = useState('')

const [descricao, setDescricao] = useState('')

const [preco, setPreco] = useState('')

const [listaBurgers, setListaBurgers] = useState([])

const [editandoId, setEditandoId] = useState(null)



function adicionarBurger(e){

  e.preventDefault()

  if(editandoId){

    setListaBurgers((prev) =>

      prev.map((burger) =>

        burger.id === editandoId

          ? {

              ...burger,

              nome,

              descricao,

              preco

            }

          : burger

      )

    )

    setEditandoId(null)

  }else{

    const novoBurger = {

      id: Date.now(),

      nome,

      descricao,

      preco

    }

    setListaBurgers((prev) => [

      ...prev,

      novoBurger

    ])

  }

  setNome('')

  setDescricao('')

  setPreco('')

}


function removerBurger(id){

  setListaBurgers((prev) =>

    prev.filter((burger) =>

      burger.id !== id

    )

  )

}

function editarBurger(burger){

  setNome(burger.nome)

  setDescricao(burger.descricao)

  setPreco(burger.preco)

  setEditandoId(burger.id)

}



  return (

  <section className="admin-page">

    <h1>Painel Admin</h1>

    <form
  className="admin-form"
  onSubmit={adicionarBurger}>

      <input
        type="text"
        placeholder="Nome do Burger"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <button>
        Adicionar Burger
      </button>

    </form>


    <div className="admin-list">

  {

    listaBurgers.map((burger) => (

      <div
        className="admin-card"
        key={burger.id}
      >

        <h2>{burger.nome}</h2>

        <p>{burger.descricao}</p>

        <span>{burger.preco}</span>

        <button
  onClick={() => editarBurger(burger)}>

  Remover

</button>

      </div>

    ))

  }

</div>

  </section>

)

}

export default Admin