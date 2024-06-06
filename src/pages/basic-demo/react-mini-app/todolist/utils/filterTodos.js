export default function filterTodos(todos, tab) {
  return todos.filter((todo) => {
    if (tab === 'all')
      return todo
		 else if (tab === 'active')
      return !todo.done
		 else if (tab === 'completed')
      return todo.done
  })
}
