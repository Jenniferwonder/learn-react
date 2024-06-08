import { Link } from 'react-router-dom'
import { useStateContext } from '@contexts/ContextProvider'

export default function ToggleSidebar() {
  const { currentColor, activeMenu, setActiveMenu }
  = useStateContext()
  return (
    <div className="flex">
      <Link
        to="/"
        className="flex items-center gap-3 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
      >
        <i className="text-3xl i-mdi-library" />
        <span>Learn React</span>
      </Link>
      <button onClick={() => setActiveMenu(!activeMenu)} className="flex items-center p-1 ml-10 text-xl rounded-full dark:bg-light-gray hover:bg-light-gray">
        {activeMenu
          ? <i className="i-mdi-chevron-double-left" style={{ color: currentColor }} />
          : <i className="i-mdi-menu" style={{ color: currentColor }} />}
      </button>
    </div>
  )
}
