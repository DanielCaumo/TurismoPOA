//Filtros

const mostrarTudo = document.querySelector('.mostrar-tudo')
const monumentos = document.querySelector('.monumentos')
const cultura =  document.querySelector('.cultura')
const gastronomia = document.querySelector('.gastronomia')
const parque = document.querySelector('.parque')

const cardsFiltrados = document.querySelectorAll('.card-filtro')

const cardsFiltradosArray = Array.from(cardsFiltrados)

mostrarTudo.addEventListener('click', showAll)
function showAll() {
  cardsFiltradosArray.forEach(div => {
    div.classList.remove('remove')
    div.classList.add('show')
  })
}

monumentos.addEventListener('click', mostrarMonumentos)
function mostrarMonumentos() {
  cardsFiltradosArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.monumentos) {
      div.classList.add('remove')
    }

  })
}

cultura.addEventListener('click', mostrarCulturas)
function mostrarCulturas() {
  cardsFiltradosArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.cultura) {
      div.classList.add('remove')
    }

  })
}

gastronomia.addEventListener('click', mostrarGastronomia)
function mostrarGastronomia() {
  cardsFiltradosArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.gastronomia) {
      div.classList.add('remove')
    }

  })
}

parque.addEventListener('click', mostrarParque)
function mostrarParque() {
  cardsFiltradosArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.parque) {
    div.classList.add('remove')
    }

  })
}