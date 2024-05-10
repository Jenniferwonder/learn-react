import PropTypes from 'prop-types'

Footer.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ),
  count: PropTypes.number.isRequired,
  showAll: PropTypes.func.isRequired,
  showActive: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
}
export default function Footer({
  count,
  showAll,
  showActive,
  showCompleted,
  clearCompleted,
}) {
  return (
    <div className="flex items-center">
      <p className="mr-1">
        {count}
        {' '}
        item left!
      </p>
      <div className="flex-grow flex-nowrap">
        <button className="mr-1" onClick={showAll}>
          All
        </button>
        <button className="mr-1" onClick={showActive}>
          Active
        </button>
        <button className="mr-1" onClick={showCompleted}>
          Completed
        </button>
      </div>
      <button className="whitespace-nowrap" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  )
}
