import DragBlock from './drag-block'
import './style/example.less'
let panel1 = new DragBlock(document.querySelector('.operation-panel'))
let panel2 = new DragBlock(document.querySelector('.operation-panel2'), {
  useDragBar: false
})
let panel3 = new DragBlock(document.querySelector('.operation-panel3'))

panel1.on('dragStart', element => {
  console.log(element.style.left)
})

panel2.on('dragStart', element => {
  console.log(element.style.left)
})

panel3.on('dragStart', element => {
  console.log(element.style.left)
})

panel1.on('dragEnd', element => {
  console.log(element.style.left)
})

panel2.on('dragEnd', element => {
  console.log(element.style.left)
})

panel3.on('dragEnd', element => {
  console.log(element.style.left)
})
