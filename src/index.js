import {add} from './add'
import './styles/main.css'

const body = document.getElementById('app')
const result = document.createTextNode(add(2, 3))
body.appendChild(result)
