import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '@contexts/ContextProvider'
import ToggleSidebar from './ToggleSidebar'

export default function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    setScreenSize,
    screenSize,
  } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 1024)
      setActiveMenu(false)
		 else
      setActiveMenu(true)
  }, [screenSize])

  return (
    <div className="w-[100vw] fixed z-[300] px-5 pt-1 shadow-sm h-14 bg-main-bg dark:bg-secondary-dark-bg">
      <div className="flex items-center justify-between pr-4">
        {activeMenu
          ? (
            <div className="flex">
              <Link
                to="/learn-react/"
                className="flex items-center gap-3 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <i className="text-3xl i-mdi-library" />
                <span>Learn React</span>
              </Link>
              <ToggleSidebar />
            </div>
            )
          : (
            <div className="flex items-center">
              <Link
                to="/learn-react/"
                className="flex items-center gap-3 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <i className="text-3xl i-mdi-library" />
                <span>Learn React</span>
              </Link>
              <ToggleSidebar />
            </div>
            )}
        {/* ref: https://stackoverflow.com/questions/25036935/get-anchor-tag-to-open-in-new-window */}
        <a target="_blank" rel="noreferrer" href="https://github.com/Jenniferwonder/learn-react" className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60">
          <i className="text-2xl i-carbon-logo-github" />
        </a>
      </div>
    </div>
  )
}
