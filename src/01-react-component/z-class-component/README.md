---
Title: README
Topic:
  - React
Type: D
tags:
  - React
DateStarted: 2024-03-06
DateModified: 2024-03-06
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 
Reviewed: 
Difficulty: 
status: 
Comment: 
aliases:
  - Class Component
---
# Class Component
## Constructor & super()
react 中的class 是基于es6的规范实现的, 继承是使用extends关键字实现继承的，子类必须在constructor()中调用super() 方法否则新建实例  
就会报错，报错的原因是 子类是没有自己的this对象的，它只能继承父类的this对象，然后对其进行加工，而super()就是将父类中的this对象继承给子类的，没有super() 子类就得不到this对象。
如果你使用了constructor就必须写super() 这个是用来初始化this的，可以绑定事件到this上  
如果你想要在constructor中使用this.props,就必须给super添加参数 super(props)  
注意，无论有没有 constructor，在render中的this.props都是可以使用的，这是react自动附带的  
如果没有用到constructor 是可以不写的，react会默认添加一个空的constroctor.

如果只调用了`super()`，那么`this.props`在`super()`和构造函数结束之间仍是`undefined`。

```js
class Button extends React.Component {
  constructor(props) {
    super(); // 没有传 props
    console.log(props);      // {}
    console.log(this.props); // undefined 
  }
  // ...
}
```

super() 可以让我们使用this来调用各种东西，  
而super(props)可以让我们在this的基础上使用构造函数里面的东西， 或者从父元素那边传过来的一些属性

## Questions
#### [React.createClass和extends Component的区别有哪些？](https://github.com/haizlin/fe-interview/issues/786)

#### [React组件的构造函数有什么作用？](https://github.com/haizlin/fe-interview/issues/930)
#### [React组件的构造函数是必须的吗？](https://github.com/haizlin/fe-interview/issues/929)
#### [`super()`和`super(props)`有什么区别？](https://github.com/haizlin/fe-interview/issues/898)
#### [constructor和getInitialState有不同？](https://github.com/haizlin/fe-interview/issues/866)
#### [React中除了在构造函数中绑定this,还有别的方式吗？](https://github.com/haizlin/fe-interview/issues/641)

#### [类组件和函数式组件有什么区别？](https://github.com/haizlin/fe-interview/issues/647)
#### [什么是React的实例？函数式组件有没有实例？](https://github.com/haizlin/fe-interview/issues/806)

#### [装饰器(Decorator)在React中有什么应用？](https://github.com/haizlin/fe-interview/issues/855)

#### [使用ES6的class定义的组件不支持mixins了，那用什么可以替代呢？](https://github.com/haizlin/fe-interview/issues/722)

### Life Cycle
#### [函数式组件有没有生命周期？为什么？](https://github.com/haizlin/fe-interview/issues/836)
#### [React16废弃了哪些生命周期？为什么？](https://github.com/haizlin/fe-interview/issues/794)
#### [React中修改prop引发的生命周期有哪几个？](https://github.com/haizlin/fe-interview/issues/686)
#### [React中发起网络请求应该在哪个生命周期中进行？为什么？](https://github.com/haizlin/fe-interview/issues/628)
#### [说说React的生命周期有哪些？](https://github.com/haizlin/fe-interview/issues/627)






