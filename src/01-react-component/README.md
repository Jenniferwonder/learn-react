---
DateStarted: 2023-12-02
DateModified: 2023-12-05
aliases:
  - React Component
---

# React Component 
## Basics
### Component Basics
- Component Name
    - Component name should be **capitalized** and be the same as the component file name
- Component Export
    - To separate the component from the entrance file `App.js`, we need to use `export default function` instead of `function` alone.
    - Can only used on the main component
- `return()`
    - Each component returns a piece of JSX code to be rendered on page
- 📌 Case
    - _[AboutPage](https://github.com/Jenniferwonder/react-tutorial/blob/main/src/components/01-quick-start/AboutPage.jsx)_
### JSX Rules & Syntax
- JSX lets you put markup into JavaScript
#### Fragment 包裹元素
>为一个组件添加多个元素,可以讲你的子组件列表添加到一个分组中(`<></>`),并且不会再DOM增加额外节点
- component also can't return multiple JSX tag
- You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper
#### Curly braces
- Curly braces let you “escape back” into JS so that you can embed some variable from your code and display it to the user
	- You can add any JavaScript expression (something that evaluates to a single value) inside *curly braces*.
	- An *object property* with dot notation
	    - `<h1>{user.name}</h1>`
	- A *template literal*
	    - `return <h1>{`Cool ${title}`}</h1>;`
	- The *returned value of a function*
	    - `return <h1>{createTitle(title)}</h1>;`
	- *ternary operators*
	    - `return <h1>{title ? title : 'Default Title'}</h1>;`
#### Conditional Rendering
- Case-1-`if...else`
- Case-2-`test? a:b`
- Case-3-`&&`
- 📌[Conditional](../../DB-React-Components/Conditional.md)
#### Render Lists
- `.map()` method
- `.filter()`
	- 📌[FilterList](../../DB-React-Components/FilterList.md)
	- 📌[ProductTableApp](../../DB-React-Components/ProductTableApp.md)
- `key`
	- `<li>` has a `key` attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
	- 📌[Lists](../../DB-React-Components/Lists.md)
### Keep Component Pure
>reference: [Keeping Components Pure – React](https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects)
#### Pure Function
>React is designed around the concept of functional programming, assuming that every component you write is a **pure function**. This means that React components you write must always return the same JSX given the same inputs
- **It minds its own business.** It does not change any objects or variables that existed before it was called
- **Same inputs, same output.** Given the same inputs, a pure function should always return the same result
📌 PureFun.jsx
📌 ImpureFun.jsx
#### Side Effects
**Side effects**: updating the screen, starting an animation, changing the data, things that happen _on the side_, not during rendering
Side effects usually belong inside [event handlers](https://react.dev/learn/responding-to-events), which don't run _during_ rendering, so event handlers don't need to be pure.
#### Benefits
- Your components could run in a different environment—for example, on the server!
- You can improve performance by [skipping rendering](https://react.dev/reference/react/memo) components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
- If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.
## Questions
### DevTools
#### [有用过React Devtools吗？说说它的优缺点分别是什么？](https://github.com/haizlin/fe-interview/issues/801)
#### [你有做过React的单元测试吗？如果有，用的是哪些工具？怎么做的？](https://github.com/haizlin/fe-interview/issues/714)
#### [浏览器为什么无法直接JSX？怎么解决呢？](https://github.com/haizlin/fe-interview/issues/624)
#### [在使用React过程中你都踩过哪些坑？你是怎么填坑的？](https://github.com/haizlin/fe-interview/issues/623)

### React Middleware 
#### [你有写过React的中间件插件吗？](https://github.com/haizlin/fe-interview/issues/691)
#### [React的中间件机制是怎么样的？这种机制有什么作用？](https://github.com/haizlin/fe-interview/issues/690)
#### [React中你用过哪些第三方的中间件？](https://github.com/haizlin/fe-interview/issues/689)

### Component Basics
#### [React声明组件有哪几种方法，各有什么不同？](https://github.com/haizlin/fe-interview/issues/604)
#### [React有几种构建组件的方式？可以写出来吗？](https://github.com/haizlin/fe-interview/issues/644)
#### [在React中组件和元素有什么区别？](https://github.com/haizlin/fe-interview/issues/804)
#### [解释下React中component和pureComponent两者的区别是什么？](https://github.com/haizlin/fe-interview/issues/618)

#### [在React中声明组件时组件名的第一个字母必须是大写吗？为什么？](https://github.com/haizlin/fe-interview/issues/803)
- [why-component-identifiers-must-be-capitalized-in-react](https://angularindepth.com/posts/1499/why-component-identifiers-must-be-capitalized-in-react)
#### [说说你对React的组件命名规范的理解](https://github.com/haizlin/fe-interview/issues/796)
#### [React组件命名推荐的方式是哪个？为什么不推荐使用displayName？](https://github.com/haizlin/fe-interview/issues/798)
#### [React的displayName有什么作用？](https://github.com/haizlin/fe-interview/issues/797)
#### [在React中如何判断点击元素属于哪一个组件？](https://github.com/haizlin/fe-interview/issues/805)
#### [说说你对“在React中，一切都是组件”的理解](https://github.com/haizlin/fe-interview/issues/626)
#### [你是如何划分React组件的？](https://github.com/haizlin/fe-interview/issues/851)
#### [如何封装一个React的全局公共组件？](https://github.com/haizlin/fe-interview/issues/825)
#### [说说你是怎么理解React的业务组件和技术组件的？](https://github.com/haizlin/fe-interview/issues/699)
#### [展示组件和容器组件有什么区别？](https://github.com/haizlin/fe-interview/issues/697)
#### [受控组件和非受控组件有什么区别？](https://github.com/haizlin/fe-interview/issues/631)
#### [React中什么是非控组件？](https://github.com/haizlin/fe-interview/issues/630)
#### [React中什么是受控组件？](https://github.com/haizlin/fe-interview/issues/629)
#### [React什么是有状态组件？](https://github.com/haizlin/fe-interview/issues/860)
#### [React如何进行代码拆分？拆分的原则是什么？](https://github.com/haizlin/fe-interview/issues/931)
#### [React自定义组件你写过吗？说说看都写过哪些？](https://github.com/haizlin/fe-interview/issues/646)
#### [React的mixins有什么作用？适用于什么场景？](https://github.com/haizlin/fe-interview/issues/664)
#### [请描述你对纯函数的理解？](https://github.com/haizlin/fe-interview/issues/632)
#### [怎样将多个组件嵌入到一个组件中？](https://github.com/haizlin/fe-interview/issues/848)

### 组件间通信
#### [React组件间的通信有哪些？](https://github.com/haizlin/fe-interview/issues/648)
#### [React非兄弟组件如何通信？](https://github.com/haizlin/fe-interview/issues/652)
#### [React兄弟组件如何通信？](https://github.com/haizlin/fe-interview/issues/651)
#### [React非父子组件如何通信？](https://github.com/haizlin/fe-interview/issues/650)
#### [React父子组件如何通信？](https://github.com/haizlin/fe-interview/issues/649)
### 如何实现双向绑定，并抽象成公共组件

### Portal & Slot
#### [举例说明React的插槽有哪些运用场景？](https://github.com/haizlin/fe-interview/issues/934)
#### [你有用过React的插槽(Portals)吗？怎么用？](https://github.com/haizlin/fe-interview/issues/933)
#### [请说说React中Portal是什么？](https://github.com/haizlin/fe-interview/issues/687)

### HOC
#### [举例说明什么是高阶组件(HOC)的属性代理？](https://github.com/haizlin/fe-interview/issues/800)
#### [举例说明什么是高阶组件(HOC)的反向继承？](https://github.com/haizlin/fe-interview/issues/802)
#### [使用高阶组件(HOC)实现一个loading组件](https://github.com/haizlin/fe-interview/issues/854)
#### [高阶组件(HOC)有哪些优点和缺点？](https://github.com/haizlin/fe-interview/issues/785)
#### [在React使用高阶组件(HOC)有遇到过哪些问题？如何解决？](https://github.com/haizlin/fe-interview/issues/752)
#### [在使用React过程中什么时候用高阶组件(HOC)？](https://github.com/haizlin/fe-interview/issues/751)


### JSX
#### [React必须使用JSX吗？](https://github.com/haizlin/fe-interview/issues/886)
#### [在JSX中如何写注释？](https://github.com/haizlin/fe-interview/issues/867)

#### [React的书写规范有哪些？](https://github.com/haizlin/fe-interview/issues/660)
#### [在React中你有经常使用常量吗？](https://github.com/haizlin/fe-interview/issues/925)
#### [写个例子说明什么是JSX的内联条件渲染](https://github.com/haizlin/fe-interview/issues/877)
#### [怎样有条件地渲染组件？](https://github.com/haizlin/fe-interview/issues/868)
#### [在React中什么时候使用箭头函数更方便呢？](https://github.com/haizlin/fe-interview/issues/872)
#### [写例子说明React如何在JSX中实现for循环](https://github.com/haizlin/fe-interview/issues/865)
#### [ES6的语法'...'在React中有哪些应用？](https://github.com/haizlin/fe-interview/issues/826)
#### [在React中遍历的方法有哪些？它们有什么区别呢？](https://github.com/haizlin/fe-interview/issues/679)
#### [props.children.map和js的map有什么区别？为什么优先选择React的？](https://github.com/haizlin/fe-interview/issues/677)
#### [写React你是用es6还是es5的语法？有什么区别？](https://github.com/haizlin/fe-interview/issues/625)

#### [在React中我们怎么做静态类型检测？都有哪些方法可以做到？](https://github.com/haizlin/fe-interview/issues/810)


#### [为什么建议Fragment包裹元素？它的简写是什么？](https://github.com/haizlin/fe-interview/issues/864)
#### [你有用过React.Fragment吗？说说它有什么用途？](https://github.com/haizlin/fe-interview/issues/863)
#### [有用过React的Fragment吗？它的运用场景是什么？](https://github.com/haizlin/fe-interview/issues/673)


#### [为什么标签里的for要写成htmlFor呢？](https://github.com/haizlin/fe-interview/issues/839)
#### [在React中如何引入图片？哪种方式更好？](https://github.com/haizlin/fe-interview/issues/829)
#### [怎么防止HTML被转义？](https://github.com/haizlin/fe-interview/issues/812)
#### [怎样在React中使用innerHTML？](https://github.com/haizlin/fe-interview/issues/692)
#### [JSX和HTML有什么区别？](https://github.com/haizlin/fe-interview/issues/661)
#### [createElement与cloneElement两者有什么区别？](https://github.com/haizlin/fe-interview/issues/620)

### Key
#### [需要把keys设置为全局唯一吗？](https://github.com/haizlin/fe-interview/issues/884)
#### [React中遍历时为什么不用索引作为唯一的key值？](https://github.com/haizlin/fe-interview/issues/643)
#### [React中的key有什么作用？](https://github.com/haizlin/fe-interview/issues/642)
### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的

### Props
#### [React组件的state和props两者有什么区别？](https://github.com/haizlin/fe-interview/issues/645)
#### [怎么在JSX里使用自定义属性？](https://github.com/haizlin/fe-interview/issues/813)
#### [怎么在JSX里属性可以被覆盖吗？覆盖的原则是什么？](https://github.com/haizlin/fe-interview/issues/814)
#### [如何给非控组件设置默认的值？](https://github.com/haizlin/fe-interview/issues/894)
#### [为什么说React中的props是只读的？](https://github.com/haizlin/fe-interview/issues/924)
#### [如果组件的属性没有传值，那么它的默认值是什么？](https://github.com/haizlin/fe-interview/issues/900)
#### [在React中组件的props改变时更新组件的有哪些方法？](https://github.com/haizlin/fe-interview/issues/824)
#### [React中验证props的目的是什么？](https://github.com/haizlin/fe-interview/issues/790)
#### [React中怎么检验props？](https://github.com/haizlin/fe-interview/issues/787)
#### [React中你有使用过getDefaultProps吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/789)
#### [给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？](https://github.com/haizlin/fe-interview/issues/784)


#### [immutable的原理是什么？](https://github.com/haizlin/fe-interview/issues/823)
#### [你对immutable有了解吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/822)

#### [React中你有使用过propType吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/788)
#### [使用PropTypes和Flow有什么区别？](https://github.com/haizlin/fe-interview/issues/869)
#### [React的isMounted有什么作用？](https://github.com/haizlin/fe-interview/issues/799)

### Event
#### React 组件中怎么做事件代理？它的原理是什么？
#### [`<div onClick={handlerClick}>单击</div>`和`<div onClick={handlerClick(1)}>单击</div>`有什么区别？](https://github.com/haizlin/fe-interview/issues/830)
jsx 事件 = 函数，会调用函数并把函数的返回值记录，在每次render 时调用  
因此，handleClick 会随事件触发调用，handleClick() 只会调用一次
#### [在React中什么是合成事件？有什么用？](https://github.com/haizlin/fe-interview/issues/713)
#### [举例说明如何在React创建一个事件](https://github.com/haizlin/fe-interview/issues/850)
#### [怎样将事件传递给子组件？](https://github.com/haizlin/fe-interview/issues/892)
#### [在React中怎么将参数传递给事件？](https://github.com/haizlin/fe-interview/issues/876)
#### [React的事件和普通的HTML事件有什么不同？](https://github.com/haizlin/fe-interview/issues/875)
#### [在React中怎么阻止事件的默认行为？](https://github.com/haizlin/fe-interview/issues/874)
#### [组件卸载前，加在DOM元素的监听事件和定时器要不要手动清除？为什么？](https://github.com/haizlin/fe-interview/issues/840)
#### [React的触摸事件有哪几种？](https://github.com/haizlin/fe-interview/issues/834)
#### [请描述下事件在React中的处理方式是什么？](https://github.com/haizlin/fe-interview/issues/662)

### Strict Mode
#### [React的严格模式有什么用处？](https://github.com/haizlin/fe-interview/issues/932)
#### [有用过React的严格模式吗？](https://github.com/haizlin/fe-interview/issues/676)

### Dynamic Render
#### [怎样动态导入组件？](https://github.com/haizlin/fe-interview/issues/895)
- 自己使用 import 和 async/await 实现的异步组件
- [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)
- 开源库 react-loadable 库/react-lazyload 库
- babel 动态导入（Dynamic Import）
#### [怎么定时更新一个组件？](https://github.com/haizlin/fe-interview/issues/883)
#### [请说下react组件更新的机制是什么？](https://github.com/haizlin/fe-interview/issues/815)
#### [shouldComponentUpdate方法是做什么的？](https://github.com/haizlin/fe-interview/issues/693)

#### [说说你对windowing的了解](https://github.com/haizlin/fe-interview/issues/935)
- 'windowing' 的技术把大数据集分解为多个块，当它们滚动到视图中时可以即时加载。它也可以用于创建无限加载列表  
- 例如：react-virtualized，react-window等都使用了“windowing”的技术  
- [https://react-window.now.sh/#/examples/list/fixed-size](https://react-window.now.sh/#/examples/list/fixed-size)  
- [https://bvaughn.github.io/react-virtualized/#/components/List](https://bvaughn.github.io/react-virtualized/#/components/List)








