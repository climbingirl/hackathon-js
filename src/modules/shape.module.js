import { Module } from '../core/module';
import { random } from '../utils'

export class ShapeModule extends Module {

  getRandomTypeShape() {
    const typeOfShapes = ['circle', 'ellipse', 'triangle', 'rectangle',
      'rhombus', 'star-8', 'star-5', 'pentagon']

    return typeOfShapes[random(0, typeOfShapes.length)]
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
  }

  setRandomPosition($elem) {
    const maxX = window.innerWidth - $elem.offsetWidth
    const maxY = window.innerHeight - $elem.offsetHeight

    const x = Math.floor(Math.random() * (maxX + 1))
    const y = Math.floor(Math.random() * (maxY + 1))

    $elem.style.position = 'absolute'
    $elem.style.left = `${x}px`
    $elem.style.top = `${y}px`

    return $elem
  }

  getRandomShape() {
    const width = random(100, 200)
    const height = random(100, 200)
    const color = this.getRandomColor()

    const $shape = document.createElement('div')
    $shape.style.backgroundColor = color
    $shape.id = 'shape'

    switch (this.getRandomTypeShape()) {
      case 'circle': {
        $shape.style.width = width + 'px'
        $shape.style.height = width + 'px'
        $shape.className = 'circle'
        return $shape
      }
      case 'ellipse': {
        $shape.className = 'ellipse'
        $shape.style.width = width * 2 + 'px'
        $shape.style.height = height + 'px'
        return $shape
      }
      case 'triangle': {
        $shape.className = 'triangle'
        $shape.style.borderWidth = `0 0 ${width}px ${width}px`
        $shape.style.borderBottomColor = color
        return $shape
      }
      case 'rectangle': {
        $shape.className = 'rectangle'
        $shape.style.width = width + 'px'
        $shape.style.height = width + 'px'
        return $shape
      }
      case 'rhombus': {
        $shape.className = 'rhombus'
        $shape.style.width = width + 'px'
        $shape.style.height = width + 'px'
        return $shape
      }
      case 'star-8': {
        $shape.className = 'star-8'
        $shape.style.width = width + 'px'
        $shape.style.height = width + 'px'
        return $shape
      }
      case 'star-5': {
        $shape.className = 'star-5'
        $shape.style.width = width + 'px'
        $shape.style.height = width + 'px'
        return $shape
      }
      case 'pentagon': {
        $shape.className = 'pentagon'
        $shape.style.width = width + 'px'
        $shape.style.height = width + 'px'
        return $shape
      }
    }
  }

  trigger() {
    document.querySelector('#shape')?.remove()
    const $shape = this.getRandomShape()

    document.body.insertAdjacentElement('afterbegin', this.setRandomPosition($shape))

    window.setTimeout(() => {
      $shape.remove()
    }, 3000);
  }
}
