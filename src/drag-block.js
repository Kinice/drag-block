import './style/index.less'
class DragBlock {
  constructor(dom, options = {}) {
    this.target = dom
    if (!this.target) return
    this.options = Object.assign({
      useDragBar: true
    }, options)

    this.targetStyles = window.getComputedStyle(dom)
    this.target.style.left = this.targetStyles.left || `${this.target.offsetLeft}px`
    this.target.style.top = this.targetStyles.top || `${this.target.offsetTop}px`

    this.targetLeft = parseFloat(this.targetStyles.left)
    this.targetTop = parseFloat(this.targetStyles.top)

    this.grabbing = false
    this.mouseX = 0
    this.mouseY = 0
    this.init()
  }

  init() {
    this.options.useDragBar ? this._setBar() : this._setNoBarTrigger()
    this._setWrapper()
    this._setTrigger()
  }

  _setBar() {
    let bar = this._createDom('div', {
      id: 'drag-bar',
      class: 'drag-bar'
    })
    bar.addEventListener('mousedown', this.barMousedownHandler.bind(this))

    this.target.append(bar)
    this.bar = bar
  }

  _setWrapper() {
    let wrapper = document.querySelector('.drag-wrapper') || this._createDom('div', {
      class: 'drag-wrapper'
    })
    wrapper.addEventListener('mouseup', this.wrapperMouseupHandler.bind(this))
    wrapper.addEventListener('mousemove', this.wrapperMousemoveHandler.bind(this))
    wrapper.addEventListener('mouseover', this.targetMouseoverHandler.bind(this))
    document.body.append(wrapper)
    this.wrapper = wrapper
  }

  _setTrigger() {
    this.target.addEventListener('mouseover', this.targetMouseoverHandler.bind(this))
    this.target.addEventListener('mouseleave', this.targetMouseleaveHandler.bind(this))
  }

  _setNoBarTrigger() {
    this.target.addEventListener('mousedown', this.barMousedownHandler.bind(this))
    this.target.style.cursor = 'move'
  }

  grab(e) {
    cancelAnimationFrame(this.timer)
    this.timer = requestAnimationFrame(() => {
      let moveX = e.screenX - this.mouseX,
        moveY = e.screenY - this.mouseY
      let nextX = this.targetLeft + moveX
      let nextY = this.targetTop + moveY
      this.target.style.left = `${nextX}px`
      this.target.style.top = `${nextY}px`
      this.mouseX = e.screenX
      this.mouseY = e.screenY
      this.targetLeft = nextX
      this.targetTop = nextY
    })
  }

  barMousedownHandler(e) {
    this.mouseX = e.screenX
    this.mouseY = e.screenY
    this.grabbing = true
    this.wrapper.style.display = 'block'
    this.wrapper.style['z-index'] = 999999999
  }

  wrapperMouseupHandler(e) {
    this.grabbing = false
    this.wrapper.style.display = 'none'
    this.wrapper.style['z-index'] = 1
  }

  wrapperMousemoveHandler(e) {
    if (this.grabbing) {
      this.grab(e)
    }
  }

  targetMouseoverHandler(e) {
    this.bar.classList.add('show')
  }

  targetMouseleaveHandler(e) {
    this.bar.classList.remove('show')
  }

  _createDom(type = 'div', options = {}, content) {
    let dom = document.createElement(type)
    if (options && options.toString() === '[object Object]' && JSON.stringify(options) !== '{}') {
      Object.keys(options).forEach(item => {
        dom.setAttribute(item, options[item])
      })
    }
    if (content) dom.append(content)
    return dom
  }
}

if (window) {
  window.DragBlock = DragBlock
}

export default DragBlock
