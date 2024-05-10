---
Title: Try React
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
  - Try React
---
# Try React
```html
<!-- the core React library -->
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<!-- provides DOM-specific methods that enable you to use React with the DOM -->
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<!-- transform your JSX code into regular JavaScript -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- to inform Babel what code to transform by changing the script type to -->
<script type="text/jsx">
const app = document.getElementById('app');
ReactDOM.render(<h1>Develop. Preview. Ship.</h1>, app);
</script>
```

## Start a React Project
### CRA (create react app)
### Vite
- `npm create vite@latest`
- https://vitejs.dev/guide/

### Use a React Framework CLI
#### Next.js
- `create-next-app` vs `create-vite`?
	- https://stackoverflow.com/questions/75492238/difference-in-using-create-vitelatest-vs-create-next-app-vs-create-react-app

#### Expo (for native apps)
- React framework
- lets you create universal Android, iOS, and web apps with truly native UIs
- provides an SDK for React Native that makes the native parts easier to use.

### Add React to an Existing Project
- https://react.dev/learn/add-react-to-an-existing-project

## Questions
#### [同时引用这三个库React.js、React-dom.js和babel.js它们都有什么作用？](https://github.com/haizlin/fe-interview/issues/656)

#### [create-react-app有什么好处？](https://github.com/haizlin/fe-interview/issues/856)
#### [create-react-app创建新运用怎么解决卡的问题？](https://github.com/haizlin/fe-interview/issues/659)

#### [说说你对React的项目结构的理解](https://github.com/haizlin/fe-interview/issues/795)

#### [不用脚手架，你会手动搭建React项目吗？](https://github.com/haizlin/fe-interview/issues/688)

#### [Mern和Yeoman脚手架有什么区别？](https://github.com/haizlin/fe-interview/issues/696)
#### [你有在项目中使用过Yeoman脚手架吗？](https://github.com/haizlin/fe-interview/issues/695)
#### [你有在项目中使用过Mern脚手架吗？](https://github.com/haizlin/fe-interview/issues/694)

#### [使用React的方式有哪几种？](https://github.com/haizlin/fe-interview/issues/658)
