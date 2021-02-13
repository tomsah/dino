import {default as data} from './data/dino.json'
import './styles/main.css'

let dinos = []
let human = {}
let gridContainer
//form
const button = document.getElementById('btn')
//Set disabled via JS in case user does not have JS enabled
button.setAttribute('disabled', 'disabled')

const form = document.getElementById('dino-compare')
const main = document.getElementById('main')

// Validate Form
form.addEventListener('input', () => {
  button.disabled = !form.checkValidity()
})

//Remove an element and its parent from the DOM
const removeElm = (elm) => {
  elm.parentNode.remove()
  showGrid()
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
    this.id = 'Dino'
  }

  static generateFact(species, fact, where, when) {
    return species === 'Pigeon'
      ? [fact]
      : [
          fact,
          `${species} could be found in ${where}`,
          `${species} used to exist from ${when}`,
        ]
  }
}
//create Dino
data.Dinos.forEach((elm) => {
  dinos.push(new Dino(elm))
})

//human
class Human extends Animal {
  constructor({diet, feet, inches, name, weight}) {
    const humanHeight = Number(feet) * 12 + Number(inches)
    super(diet, humanHeight, 'human', weight)
    this.name = name
  }
}
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

//Fact Comparison
const compareFact = (dinos, human) => {
  dinos.forEach((dino) => {
    const weightFact = compareWeight(dino, Number(human.weight))
    const dietFact = compareDiet(dino, human.diet.toLowerCase())
    const heightFact = compareHeight(dino, human.height)
    dino.fact =
      dino.species === 'Pigeon'
        ? dino.fact
        : [...dino.fact, weightFact, dietFact, heightFact]
  })
}

const compareWeight = (dino, humanWeight) =>
  dino.weight > humanWeight
    ? `you are ${dino.weight - humanWeight}lbs lighter than ${dino.species}`
    : `you are ${humanWeight - dino.weight}lbs Heavier than ${dino.species}`

const compareDiet = (dino, humanDiet) => {
  let dietFact
  if (dino.diet === humanDiet.toLowerCase()) {
    dietFact = `you have the same ${dino.diet} diet than ${dino.species}`
  } else if (dino.diet === 'herbavor') {
    dietFact = `you are safe with ${dino.species}, I am on ${dino.diet} diet than`
  } else if (dino.diet === 'carnivor') {
    dietFact = `careful ${dino.species} has a ${dino.diet} diet, you can easily become its meal`
  }
  return dietFact
}

const compareHeight = (dino, humanHeight) =>
  Number(dino.height) > humanHeight
    ? `you are ${Number(dino.height) - humanHeight}inches smaller than ${
        dino.species
      }`
    : `you are ${
        parseInt(human.weight) - Number(dino.height)
      }inches taller than ${dino.species}`

// Layout
const createTiles = (name, imgSrc, fact) => {
  //grid-item
  const tile = document.createElement('div')
  tile.className = 'grid-item'

  //Header
  const header = document.createElement('h3')
  const tileHeaderText = document.createTextNode(name)
  header.appendChild(tileHeaderText)
  tile.appendChild(header)

  //image
  const img = document.createElement('img')
  img.src = imgSrc
  tile.appendChild(img)

  //Fact
  if (fact) {
    const textComponent = document.createElement('p')
    const randomFact = fact[Math.floor(Math.random() * fact.length)]
    const tileFact = document.createTextNode(randomFact)
    textComponent.appendChild(tileFact)
    tile.appendChild(textComponent)
  }
  return tile
}

const makeGrid = () => {
  // Grid-container
  gridContainer = document.createElement('div')
  gridContainer.id = 'container'

  // restartBtn
  const restartBtn = document.createElement('button')
  restartBtn.append('restart')
  restartBtn.addEventListener('click', (event) => {
    document.getElementById('grid').innerHTML = ''
    dinos.splice(4, 1)
    removeElm(event.target)
  })
  gridContainer.appendChild(restartBtn)

  //grid
  const grid = document.createElement('div')
  grid.id = 'grid'
  gridContainer.appendChild(grid)
  //randomise dinos arr
  dinos.sort(() => Math.random() - 0.5)
  // add human Obj to arr
  dinos.splice(4, 0, human)
  // Add tiles to DOM
  dinos.forEach((item) => {
    const tiles =
      item.id === 'Dino'
        ? createTiles(item.species, item.imgSrc, item.fact)
        : createTiles(item.name, item.imgSrc)
    grid.appendChild(tiles)
  })
}

// Remove form from screen
let isFormVisible = Boolean(form)

const showGrid = () => {
  if (isFormVisible) {
    isFormVisible = false
    main.appendChild(gridContainer)
  } else {
    isFormVisible = true
    form.reset()
    document.getElementById('main').appendChild(form)
  }
}

//on form submit
button.addEventListener('click', (event) => {
  getUserData()
  compareFact(dinos, human)
  makeGrid()
  removeElm(event.target.parentNode)
})
