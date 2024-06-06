---
title: Respond to Events (Inputs)
tags:
  - React
Topic:
  - React
Type: D
DateStarted: 2023-12-06
DateModified: 2024-03-05
DateDo:
DateDone:
DateDue:
DateReviewed:
status:
Reviewed:
Difficulty:
Comment:
---

# Respond to Events (Inputs)
- React 事件绑定原理
    - [深入理解React：事件机制原理](https://link.segmentfault.com/?enc=YWEtw47CvOdPRPRJCJ0lxA%3D%3D.CuQXmGFuL7V69GLgnC6fFFMLm%2Fcpx6Mo5oQ0kdkOWgh4Za%2BUqvZdkoW7IoaLDTqaJtyqsYD9QGfnqxGRrf0qQA%3D%3D)

## Reference

### [Reacting to Input with State • React](https://beta.reactjs.org/learn/reacting-to-input-with-state)

- _Identify_ your component's different visual states
- _Determine_ what triggers those state changes (Human/ computer input)
- _Represent_ the state in memory using `useState`
- _Remove_ any non-essential state variables
- _Connect_ the event handlers to set the state

### `onClick={handleClick}`

- 📌[Click](../../DB-React-Components/Click.md)
- 📌[UpdateClick](../../DB-React-Components/UpdateClick.md)
- 📌[RemoveBg](../../DB-React-Components/RemoveBg.md)
- 📌[Gallery](../../DB-React-Components/Gallery.md)
  - Store Boolean as state
  - Conditional rendering
  - `handleNextClick(){}`
  - `handleMoreClick(){}`

### `onSubmit` (Form Handling)

- 📌[Quiz](../../DB-React-Components/Quiz.md)
  - `async function`
    - `try {await...} catch (err) {...}`
  - `new Promise((resolve, reject) =>{ })`
    - `setTimeout()`
    - `new Error()`
- 📌[EditProfile](../../DB-React-Components/EditProfile.md)

### `onChange` (input text & checkbox)

- `onChange={(e) => onFilterTextChange(e.target.value)}`
- `onChange={(e) => onInStockOnlyChange(e.target.checked)}`
- 🏷️Table
  - 📌[ProductTableApp](../../DB-React-Components/ProductTableApp.md)
  - 📌[FilterList](../../DB-React-Components/FilterList.md)
- 📌[MailSelect](../../DB-React-Components/MailSelect.md)

### `onFocus` & `onPointerMove`

- 📌[MailHighlight](../../DB-React-Components/MailHighlight.md) (Highlight & Star)
