import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'
import ThemeSettings from '../components/ThemeSettings.jsx'
import App from '../App.jsx'

export default function DefaultLayout() {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    setActiveMenu,
    screenSize,
  } = useStateContext()

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode')
    const currentThemeMode = localStorage.getItem('themeMode')
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor)
      setCurrentMode(currentThemeMode)
    }
  }, [])

  return (
    <App>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <Navbar />
        {/* Sidebar Overlay */}
        {activeMenu && screenSize < 900 && (
          <div
            className="fixed w-screen mt-14 inset-0 bg-[black]/60 z-[50] lg:hidden"
            onClick={() => setActiveMenu(false)}
          />
        )}
        <div className="flex dark:bg-main-dark-bg">
          {/* Sidebar */}
          {activeMenu
            ? (
              <div>
                <Sidebar />
              </div>
              )
            : (
              <div className="invisible">
                <Sidebar />
              </div>
              )}
          {/* Theme Settings */}
          <div>
            {themeSettings && (
              <>
                <ThemeSettings />
                {/* Setting Overlay */}
                <div
                  className="fixed w-screen inset-0 bg-[black]/60 z-[200]"
                  onClick={() => setThemeSettings(false)}
                />
              </>
            )}
          </div>
          {/* Setting Button */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className="p-2 text-white hover:bg-light-gray"
            >
              <i className="text-3xl i-carbon-settings hover:drop-shadow-xl" />
            </button>
          </div>
          {/* Main Content */}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg bg-main-bg md:ml-60 w-full min-h-screen'
                : 'dark:bg-main-dark-bg bg-main-bg w-full min-h-screen'
            }
          >
            <div className="mr-5 mt-12 -ml-4 md:m-16 md:mt-20 p-2 md:p-10 dark:bg-[#34373e] bg-white md:rounded-3xl">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </App>
  )
}
