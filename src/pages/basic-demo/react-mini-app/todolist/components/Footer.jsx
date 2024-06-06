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
    <div className="md:flex items-center">
      <div className="ml-4 md:flex-grow md:flex-nowrap md:ml-0">
        <button className="mr-1" onClick={showAll}>
          All
        </button>
        <button className="mr-1" onClick={showActive}>
          Active
        </button>
        <button className="mr-1" onClick={showCompleted}>
          Completed
        </button>
        <button className="whitespace-nowrap" onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
      <p className="block ml-6 md:mr-1 md:ml-0 md:order-first">
        {count}
        {' '}
        item left!
      </p>
    </div>
  )
}
