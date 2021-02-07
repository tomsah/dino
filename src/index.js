import {default as data} from './data/dino.json'
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

// // Based class for human and dino
class Animal {
  constructor(diet, height, species, weight) {
    this.diet = diet
    this.height = height
    this.species = species
    this.weight = weight
  }
}
//
// //Dino Constructor Object
class Dino extends Animal {
  constructor({diet, fact, height, species, weight, when, where}) {
    super(diet, height, species, weight)
    this.fact = fact
    this.when = when
    this.where = where
  }
}

//create Dino
let dinos = []
data.Dinos.forEach((elm) => dinos.push(new Dino(elm)))

console.log('dinos', dinos)
