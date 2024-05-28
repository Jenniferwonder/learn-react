import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'

function NavButton({ title, customFunc, icon, color, dotColor }) {
  return (
    <button
      title={title}
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative p-3 text-xl rounded-full hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
      />
      {icon}
    </button>
  )
}
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
    if (screenSize <= 900)
      setActiveMenu(false)
		 else
      setActiveMenu(true)
  }, [screenSize])

  const handleActiveMenu = () => setActiveMenu(!activeMenu)

  return (
    <div className="">
      {activeMenu
        ? ''
        : (
          <NavButton
            title="Menu"
            customFunc={handleActiveMenu}
            color={currentColor}
            icon={<AiOutlineMenu />}
          />
          )}

    </div>
  )
}
