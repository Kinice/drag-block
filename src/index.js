import DragBlock from './drag-block'
import './style/example.less'
new DragBlock(document.querySelector('.operation-panel'));
new DragBlock(document.querySelector('.operation-panel2'), {
  useDragBar: false
});
new DragBlock(document.querySelector('.operation-panel3'));
