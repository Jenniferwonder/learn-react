import { useEffect } from 'react'
import { useStateContext } from '@contexts/ContextProvider'
import ToggleSidebar from './ToggleSidebar'
import IconRound from './IconRound'

export default function Navbar() {
  const {
    setActiveMenu,
    setScreenSize,
    screenSize,
    toggleMode,
    isDark,
  } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [setScreenSize])

  useEffect(() => {
    if (screenSize <= 1024)
      setActiveMenu(false)
		 else
      setActiveMenu(true)
  }, [screenSize, setActiveMenu])

  return (
    <div className="w-[100vw] fixed z-[300] px-5 pt-1 shadow-sm h-14 bg-main-bg dark:bg-secondary-dark-bg">
      <div className="flex items-center justify-between pr-4">
        <ToggleSidebar />
        <div className="flex">
          <IconRound>
            {isDark ? <i className="text-2xl cursor-pointer i-carbon-moon" onClick={() => toggleMode()} /> : <i className="text-2xl cursor-pointer i-carbon-sun" onClick={() => toggleMode()} />}

          </IconRound>
          <IconRound>
            <a target="_blank" rel="noreferrer" href="https://github.com/Jenniferwonder/learn-react">
              <i className="text-2xl i-carbon-logo-github" />
            </a>
          </IconRound>

        </div>
      </div>
    </div>
  )
}
