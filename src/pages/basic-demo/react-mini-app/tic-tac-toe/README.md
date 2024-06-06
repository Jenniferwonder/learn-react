---
DateStarted: 2023-12-03
DateModified: 2023-12-05
mindmap-plugin: basic
aliases:
  - tic-tac-toe
---

# 02-Tic-Tac-Toe

## Build *Tic-Tac-Toe*

### ![[Demo-tic-tac-toe.png]]

## 📌*Square*

### Display the value of each square

### Respond to Click event

## 📌*Board*

### 🛠️Store Array in `useState`
- To store 9 squares value (X/O) in state
    - `const [squares, setSquares] = useState(Array(9).fill(null));`

### ✅Update the squares array with `handleClick(i)` function
- 🛠️Store Boolean in `useState`
    - To decide the value of next move
        - `const [xIsNext, setXIsNext] = useState(true);`
- ✅Create a copy of the squares array
    - call `.slice()`
    - `const nextSquares = squares.slice();`
    - 📌Immutability is important
        - Immutability makes complex features much easier to implement.
            - “time travel” feature
        - skip re-rendering a part of the tree that clearly wasn’t affected by it for performance reasons
            - By default, all child components re-render automatically when the state of a parent component changes.
        - how React chooses when to re-render a component
            - https://react.dev/reference/react/memo
- ✅Take turns
    - Use `xIsNext` and assign value to the copied array
        - `xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");`
    - Prevent the X being overwritten by an O
        - check if X/O exist, if true, return

### ✅⭐Declare winners
- Use *calculateWinner* function (using a 2d-array)
    - Store all possible winning cases
- Add the function result to the *preventing statement* (in Take turns)
- Display winning message
    - String concatenation
        - `status = "Next player: " + (xIsNext ? "X" : "O");`

### Render Board value

## 📌*Game* > *Index.js*

### Add time travel
- ✅Lifting state up, again
    - write a new top-level component called *Game* to display a list of past moves
- Control squares state in Game
    - Store the past *squares* arrays in another array called *history* as a new state
        - `const [history, setHistory] = useState([Array(9).fill(null)]);`
        - It represents all board states, from the first to the last move
    - 🛠️Render the last move from the history
        - `const currentSquares = history[history.length - 1];`
- 🛠️Add function `handlePlay` to update the game
    - It will be called by the Board component to update the game
    - Pass `xIsNext`, `currentSquares` and `handlePlay` as props to the Board component
    - update `history` by appending the updated `squares` array as a new history entry
        - `setHistory([...history, nextSquares]);`
    - Update `xIsNext`
        - toggle `xIsNext`, just as Board used to do
            - `setXIsNext(!xIsNext);`
- ✅Display moves history as buttons
    - use `map` to transform your `history` of moves into React elements representing buttons on the screen,
        - `history.map((squares, move) =>{}`
        - Render button description for each move
            - move > 0
                - `description = "Go to move #" + move;`
            - else
                - `description = "Go to game start";`
        - Unique ID for each list of button
            - it’s safe to use the move index as a key
                - `<li key={move}> </li>`
            - 📌Avoid *key* error
                - If no key is specified, React will report an error and use the *array index* as a key by default.
                    - It is problematic when trying to re-order a list’s items or inserting/removing list items
                - Keys do not need to be globally unique; they only need to be unique between components and their siblings.
    - Define button function to update `currentMove`
        - keep track of which step the user is currently viewing
            - `const [currentMove, setCurrentMove] = useState(0);`
        - `<button type="button" onClick={() => jumpTo(move)}>{description}</button>`
        - Add *jumpTo* function inside `Game`
            - update that `currentMove`
                - `setCurrentMove(nextMove);`
            - set `xIsNext` to true if the number that you’re changing `currentMove` to is even (偶数)
                - 🛠️`setXIsNext(nextMove % 2 === 0);`
                - ✅`const xIsNext = currentMove % 2 === 0;`
- ✅Modify *handlePlay* function
    - If you “go back in time” and then make a new move from that point, you only want to keep the history up to that point.
        - add it after all items in `history.slice(0, currentMove + 1)` so that you’re only keeping that portion of the old history.
            - `const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];`
    - Each time a move is made, you need to update `currentMove` to point to the latest history entry.
        - `setHistory(nextHistory);`
        - `setCurrentMove(nextHistory.length - 1);`
- ✅Render the currently selected move
    - modify the `Game` component
        - `const currentSquares = history[currentMove];`
