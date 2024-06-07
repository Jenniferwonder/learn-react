---
Title: React `useContext` and Context API
Topic:
  - React
Type: D
tags:
  - React
DateStarted: 2024-01-17
DateModified: 2024-03-20
DateDo:
DateDone:
DateDue:
DateReviewed:
Reviewed:
Comment:
Difficulty:
status:
aliases:
  - useContext
---
# React `useContext` and Context API
>[Passing Data Deeply with Context – React](https://react.dev/learn/passing-data-deeply-with-context)
>[useContext – React](https://react.dev/reference/react/useContext)
## `useContext`
### Why
a React Hook lets you read and subscribe to [context](https://react.dev/learn/passing-data-deeply-with-context) from your component.
_Context_ lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props
### Basics
`const value = useContext(SomeContext)`
#### createContext()

```jsx
import { createContext } from 'react'
const ThemeContext = createContext('light')
```
#### useContext()
```jsx
import { useContext } from 'react';
function MyComponent() {
	const theme = useContext(ThemeContext);
```
#### Parameter
`SomeContext`
- The context that you've previously created with [`createContext`](https://react.dev/reference/react/createContext)(a React API).
- it only represents the kind of information you can provide or read from components
#### Return
`useContext` returns the context value for the calling component.
- It is determined as the `value` passed to the closest `SomeContext.Provider` above the calling component in the tree
- `useContext()` call in a component is not affected by providers returned from the _same_ component. The corresponding `<Context.Provider>` **needs to be above** the component doing the `useContext()` call
### Use Case
#### Updating a value via context
📌 ThemeContextApp.jsx
#### Updating an object via context
📌 CurrentUser.jsx
#### Multiple Context
📌 MultiContext.jsx
#### Extract Context
📌 ExtractContext.jsx
#### Specifying a fallback default value
`const ThemeContext = createContext('light');`
#### Override a theme
📌 OverrideContext.jsx
## `createContext()` API
### Parameter
### Return

## Questions
#### [怎么使用Context开发组件？](https://github.com/haizlin/fe-interview/issues/944)
#### [在React怎么使用Context？](https://github.com/haizlin/fe-interview/issues/937)
#### [为什么React并不推荐我们优先考虑使用Context？](https://github.com/haizlin/fe-interview/issues/943)
#### [说说Context有哪些属性？](https://github.com/haizlin/fe-interview/issues/945)
#### [除了实例的属性可以获取Context外哪些地方还能直接获取Context呢？](https://github.com/haizlin/fe-interview/issues/942)
#### [childContextTypes是什么？它有什么用？](https://github.com/haizlin/fe-interview/issues/941)
#### [contextType是什么？它有什么用？](https://github.com/haizlin/fe-interview/issues/940)
#### [Consumer向上找不到Provider的时候怎么办？](https://github.com/haizlin/fe-interview/issues/939)
#### [有使用过Consumer吗？](https://github.com/haizlin/fe-interview/issues/938)
#### [Context api可以取代Redux吗？为什么？](https://github.com/haizlin/fe-interview/issues/916)
