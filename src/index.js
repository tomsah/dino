import './styles/main.css'

//form
const button = document.getElementById('btn')

const removeElm = (elm) => {
  elm.parentNode.remove()
}

//Remove Form
button.addEventListener('click', (event) => {
  removeElm(event.target.parentNode)
})
