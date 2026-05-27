function Modal({ burger, fecharModal }) {

  if(!burger) return null

  return (

    <div className="modal" onClick={fecharModal}>

      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <span 
          className="close"
          onClick={fecharModal}
        >
          ✖
        </span>

        <img src={burger.imagem} alt={burger.nome} />

        <h2>{burger.nome}</h2>

        <p>{burger.descricao}</p>

        <span>{burger.preco}</span>

      </div>

    </div>

  )
}

export default Modal