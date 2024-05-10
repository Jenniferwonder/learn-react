// 🏷️03-think-in-react
import Game from './tic-tac-toe/Game'
import ProductTableApp from './product-table-app/ProductTableApp'
import ToDoApp from './todolist/ToDoApp'

export default function ThinkInReact() {
  return (
    <>
      <h1>🏷️think-in-react</h1>
      <ProductTableApp />
      <hr/>
      <Game />
      <hr/>
      <ToDoApp />
    </>
  )
}
