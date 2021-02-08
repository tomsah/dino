import {default as data} from './data/dino.json'
import './styles/main.css'

//form
const button = document.getElementById('btn')
const form = document.getElementById('dino-compare')

//Remove an element and its parent from the DOM
const removeElm = (elm) => {
  elm.parentNode.remove()
}

// Based class for human and dino
class Animal {
  constructor(diet, height, species, weight) {
    this.diet = diet
    this.height = height
    this.species = species
    this.weight = weight
    this.imgSrc = `./images/${species}.png`
  }
}

// Dino Constructor Object
class Dino extends Animal {
  constructor({diet, fact, height, species, weight, when, where}) {
    super(diet, height, species, weight)
    this.fact = Dino.generateFact(species, fact, where, when)
    this.when = when
    this.where = where
  }

  static generateFact(species, fact, where, when) {
    return species === 'Pigeon'
      ? [fact]
      : [
          fact,
          `${species} could be found in ${where}`,
          `${species} used tto exist from ${when}`,
        ]
  }
}

//create Dino
let dinos = []
data.Dinos.forEach((elm) => dinos.push(new Dino(elm)))

//human
class Human extends Animal {
  constructor({diet, feet, inches, name, weight}) {
    const humanHeight = Number(feet) * 12 + Number(inches)
    super(diet, humanHeight, 'human', weight)
    this.name = name
  }
}

let human = {}
const getUserData = () =>
  (function () {
    const humanData = {
      name: form['name'].value,
      weight: form['weight'].value,
      feet: form['feet'].value,
      inches: form['inches'].value,
      diet: form['diet'].value,
    }
    human = new Human(humanData)
  })()

//on form submit
button.addEventListener('click', (event) => {
  getUserData()
  console.log('human', human)
  removeElm(event.target.parentNode)
})

console.log('dinos', dinos)
