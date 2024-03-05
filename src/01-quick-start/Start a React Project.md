---
Title: Start a React Project
Type: D
tags:
  - React
DateStarted: 2023-12-02
DateModified: 2023-12-02
DateDo: 
DateDone: 
DateDue: 
status:
---

# 💡Start a React Project

## Try React

### load two React scripts from an external website called [unpkg.com](https://unpkg.com/)

-
  ```html
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  ```

- *react*
    - the core React library
- *react-dom*
    - provides DOM-specific methods that enable you to use React with the DOM

### browsers don't understand JSX out of the box, so you'll need a JavaScript compiler, such as a [Babel](https://babeljs.io/), to transform your JSX code into regular JavaScript
- you will also need to inform Babel what code to transform by changing the script type to `type=text/jsx`

-
  ```html
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/jsx">
        const app = document.getElementById('app');
        ReactDOM.render(<h1>Develop. Preview. Ship.</h1>, app);
  
  
  </script>
  
  ```


## CRA (create react app)

## ❓Vite

### `npm create vite@latest`

### Reference
- https://vitejs.dev/guide/

### create-next-app vs create-vite?
- https://stackoverflow.com/questions/75492238/difference-in-using-create-vitelatest-vs-create-next-app-vs-create-react-app

## 📌 [O-NextJS](../../../../../React-Full-Stack/Next.js/O-NextJS.md)

## 📌 [O-Remix](../../../../../React-Full-Stack/Remix/O-Remix/O-Remix.md)

## 📌 [O-Gatsby](../../../../../SSG/Gatsby/O-Gatsby/O-Gatsby.md)

## 📌 [O-Astro](O-Astro)

## 📌 [O-Quick](O-Quick)

## 📌 Expo (for native apps)

### React framework

### lets you create universal Android, iOS, and web apps with truly native UIs

### provides an SDK for React Native that makes the native parts easier to use.

## Add React to an Existing Project

### https://react.dev/learn/add-react-to-an-existing-project