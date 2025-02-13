import './index.css'
import img from './assets/img.png'
import { title } from './main.js'

const i = document.createElement('img')
i.src = img
document.body.appendChild(i)

title()

console.log('Hello World!')