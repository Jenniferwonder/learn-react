import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'

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

  const openActiveMenu = () => setActiveMenu(true)

  return (
    <div className="w-full h-14 px-5 pt-1 shadow-sm bg-main-bg dark:bg-secondary-dark-bg">
      {activeMenu
        ? ''
        : (
          <div className="flex items-center">
            <Link
              to="/learn-react"
              className="flex items-center gap-3 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              {' '}
              <span>Learn React</span>
            </Link>
            <button
              title="open sidebar"
              type="button"
              onClick={openActiveMenu}
              style={{ color: currentColor }}
              className="p-1 text-xl rounded-full dark:bg-light-gray hover:bg-light-gray ml-14"
            >
              <AiOutlineMenu />
            </button>
          </div>
          )}

    </div>
  )
}
