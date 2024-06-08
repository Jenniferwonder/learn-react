import { NavLink } from 'react-router-dom'

export default function SideLink({ icon, item, to, link, onClick, currentColor }) {
  const activeLink
    = 'flex items-center gap-2 pl-3 pt-2 pb-1.5 rounded-lg  text-white text-md m-2 ml-6'
  const normalLink
    = 'flex items-center gap-2 pl-3 pt-2 pb-1.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black dark:hover:bg-gray-400 m-2 ml-6 hover:bg-gray-100'
  return (
    <div>
      <NavLink
        to={to}
        onClick={onClick}
        style={({ isActive }) => ({
          backgroundColor: isActive ? currentColor : '',
        })}
        className={({ isActive }) =>
          isActive ? activeLink : normalLink}
      >
        <i className={`text-xs dark:hover:text-black !text-gray-400 ${icon}`} />
        <span className="capitalize">{link ? link.name : item.name}</span>
      </NavLink>
    </div>
  )
}
