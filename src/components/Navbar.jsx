import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '@contexts/ContextProvider'
import ToggleSidebar from './ToggleSidebar'

export default function Navbar() {
  const {
    currentColor,
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

  // const openActiveMenu = () => setActiveMenu(true)

  return (
    <div className="w-[100vw] fixed z-[300] px-5 pt-1 shadow-sm h-14 bg-main-bg dark:bg-secondary-dark-bg">
      {activeMenu
        ? (
          <div className="w-full  flex items-center">
            <Link
              to="/learn-react"
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
              to="/learn-react"
              className="flex items-center gap-3 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <i className="text-3xl i-mdi-library" />
              <span>Learn React</span>
            </Link>
            <ToggleSidebar />
            {/* <button
              title="open sidebar"
              type="button"
              onClick={openActiveMenu}
              style={{ color: currentColor }}
              className="flex items-center p-1 text-xl rounded-full dark:bg-light-gray hover:bg-light-gray ml-14"
            >
              <i className="i-mdi-menu"></i>
            </button> */}
          </div>
          )}

    </div>
  )
}
