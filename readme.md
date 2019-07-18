# drag-block

一个简单的、将所有设置定位的元素变为可拖拽的小工具。

## Installation

通过npm安装：
```bash
$ npm i -S drag-block
```
或直接获取源码：

[Releases](https://github.com/Kinice/drag-block/releases)

## Usage

在项目中import(ES6 modules)
```javascript
import DragBlock from 'drag-block'
```

或在html中用引入源码中的`lib/drag-block.js`：

```html
<script src="drag-block.js"></script>
```

然后在js中使用：

```javascript
let drag = new DragBlock(DomElement[, options])
```

可以监听相应的事件：

```javascript
drag.on('dragStart', target => {
  console.log(target.style.left)
})
```

其中`DomElement`是需要可拖拽的`position: fixed | absolute | reletive`元素，options是选项对象。

*本工具不负责处理目标元素的样式之类*

## Options

参数 | 说明 |  类型  |  默认值
-|-|-|-
`useDragBar` | 是否使用弹出的拖拽条，`false`时直接拖拽目标本体 | `Boolean` | `true`

更多功能和配置项后续添加～欢迎提交[issue](https://github.com/Kinice/drag-block/issues)～

## Events

事件名称 | 说明 | 回调参数
-|-|-
`dragStart` | 点击bar或者本体开始拖动时触发 | 目标dom
`dragEnd` | 拖动结束时触发 | 目标dom

## Example

https://kinice.github.io/drag-block/
