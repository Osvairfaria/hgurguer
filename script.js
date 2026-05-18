const cards = document.querySelectorAll('.card')

cards.forEach(card => {

  card.addEventListener('mouseenter', () => {

    card.style.boxShadow = '0 0 25px rgba(255,183,3,0.5)'

  })

  card.addEventListener('mouseleave', () => {

    card.style.boxShadow = 'none'

  })

})


/**  Menu mobile  */

const menuMobile = document.querySelector('.menu-mobile')

const menu = document.querySelector('.menu')

menuMobile.addEventListener('click', () => {

  menu.classList.toggle('active')

})


/**
 * Header scroll effect
 */

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    header.classList.add('scroll')

  }else{

    header.classList.remove('scroll')

  }

})



/**
 * Scroll reveal
 */

const fadeElements = document.querySelectorAll('.fade-in')

function revealOnScroll(){

  fadeElements.forEach(element => {

    const windowHeight = window.innerHeight

    const elementTop = element.getBoundingClientRect().top

    if(elementTop < windowHeight - 100){

      element.classList.add('show')

    }

  })

}

window.addEventListener('scroll', revealOnScroll)

revealOnScroll()


/**
 * Counter animation
 */

const counters = document.querySelectorAll('.counter')

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const counter = entry.target

      const target = +counter.getAttribute('data-target')

      let current = 0

      const increment = target / 100

      const updateCounter = () => {

        current += increment

        if(current < target){

          counter.innerText = Math.ceil(current)

          requestAnimationFrame(updateCounter)

        }else{

          counter.innerText = target
        }

      }

      updateCounter()

      counterObserver.unobserve(counter)

    }

  })

}, {
  threshold: 0.5
})

counters.forEach(counter => {

  counterObserver.observe(counter)

})

/**
 * Back to top button topo
 */

const botaoTopo = document.querySelector('.topo')

window.addEventListener('scroll', () => {

  if(window.scrollY > 500){

    botaoTopo.classList.add('show')

  }else{

    botaoTopo.classList.remove('show')

  }

})

botaoTopo.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

})


/**
 * 3D card effect
 */

const cards3D = document.querySelectorAll('.card')

cards3D.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left

    const y = e.clientY - rect.top

    const centerX = rect.width / 2

    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / 20) * -1
    const rotateY = (x - centerX) / 20

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `

  })

  card.addEventListener('mouseleave', () => {

    card.style.transform = `
      rotateX(0)
      rotateY(0)
      scale(1)
    `

  })

})



/**
 * Scroll reveal para elementos da esquerda e direita
 */

const revealElements = document.querySelectorAll('.reveal-left, .reveal-right')

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add('show')

    }

  })

}, {
  threshold: 0.3
})

revealElements.forEach(element => {

  revealObserver.observe(element)

})



/**
 * FAQ accordion
 * 
 */
const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(item => {

  const question = item.querySelector('.faq-question')

  question.addEventListener('click', () => {

    item.classList.toggle('active')

  })

})

/**
 * Carousel automático
 */
const carousel = document.querySelector('.avaliacoes-cards')

let scrollPosition = 0

function autoCarousel(){

  scrollPosition += 380

  if(scrollPosition > carousel.scrollWidth - window.innerWidth){

    scrollPosition = 0
  }

  carousel.style.transform = `translateX(-${scrollPosition}px)`
}

setInterval(autoCarousel, 3000)


/**
 * Formulário de contato
 */
const formulario = document.querySelector('#formulario')

const mensagemForm = document.querySelector('.mensagem-form')

formulario.addEventListener('submit', (e) => {

  e.preventDefault()

  const inputs = formulario.querySelectorAll('input, textarea')

  let validado = true

  inputs.forEach(input => {

    if(input.value.trim() === ''){

      validado = false

      input.style.borderColor = 'red'

    }else{

      input.style.borderColor = '#ffb703'
    }

  })

  if(validado){

    mensagemForm.innerText = 'Mensagem enviada com sucesso! 🔥'

    formulario.reset()

  }else{

    mensagemForm.innerText = 'Preencha todos os campos, por favor.'
  }

})

/**
 * Carregar burgers do JSON
 
*/
let todosBurgers = []

async function carregarBurgers(){

  const resposta = await fetch('burgers.json')

  todosBurgers = await resposta.json()

  mostrarBurgers(todosBurgers)

}

function mostrarBurgers(lista){

  const cards = document.querySelector('#cards')

  cards.innerHTML = ''

  lista.forEach(burger => {

    cards.innerHTML += `
    
      <div class="card fade-in show">

        <img src="${burger.imagem}" alt="${burger.nome}">

        <div class="card-content">

          <h3>${burger.nome}</h3>

          <p>${burger.descricao}</p>

          <span>${burger.preco}</span>

          <button class="abrir-modal">
            Comprar Agora
          </button>

        </div>

      </div>

    `
  })

}

document.addEventListener('DOMContentLoaded', () => {

  carregarBurgers()

  const botoesFiltro = document.querySelectorAll('.filtros button')

  botoesFiltro.forEach(botao => {

    botao.addEventListener('click', () => {

      const categoria = botao.dataset.categoria

      if(categoria === 'todos'){

        mostrarBurgers(todosBurgers)

      }else{

        const filtrados = todosBurgers.filter(burger => 
          burger.categoria === categoria
        )

        mostrarBurgers(filtrados)

      }

    })

  })

})


/**
 * Modal de detalhes do burger
 */
const modal = document.querySelector('.modal')

const modalImg = document.querySelector('#modal-img')

const modalTitulo = document.querySelector('#modal-titulo')

const modalDescricao = document.querySelector('#modal-descricao')

const modalPreco = document.querySelector('#modal-preco')

const fecharModal = document.querySelector('.fechar-modal')

document.addEventListener('click', (e) => {

  if(e.target.classList.contains('abrir-modal')){

    const card = e.target.closest('.card')

    const img = card.querySelector('img').src

    const titulo = card.querySelector('h3').innerText

    const descricao = card.querySelector('p').innerText

    const preco = card.querySelector('span').innerText

    modalImg.src = img

    modalTitulo.innerText = titulo

    modalDescricao.innerText = descricao

    modalPreco.innerText = preco

    modal.classList.add('show')
  }

})

fecharModal.addEventListener('click', () => {

  modal.classList.remove('show')

})




modal.addEventListener('click', (e) => {

  if(e.target === modal){

    modal.classList.remove('show')

  }

})

/**
 * Desabilitar scroll automático ao voltar para a página
 */
window.history.scrollRestoration = "manual"

window.onload = () => {

  window.scrollTo(0, 0)

}