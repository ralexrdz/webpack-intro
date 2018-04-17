import { join } from 'lodash'
import { square } from './math.js'
import './style.css'
import Icon from './dice.png'

function component () {
  var element = document.createElement('div')

  element.innerHTML = join([square(2), 'webpack'], ' ')

  var myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  return element
}

document.body.appendChild(component())
