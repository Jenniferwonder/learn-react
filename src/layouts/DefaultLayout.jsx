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
        <div className="relative flex dark:bg-main-dark-bg">
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
          {/* Sidebar Overlay */}
          {activeMenu && screenSize < 900 && (
            <div
              className="fixed inset-0 bg-[black]/60 z-50 lg:hidden"
              onClick={() => setActiveMenu(false)}
            />
          )}
          {/* Sidebar */}
          {activeMenu
            ? (
              <div className=" ">
                <Sidebar />
              </div>
              )
            : (
              <div className="invisible">
                <Sidebar />
              </div>
              )}
          <div>
            {themeSettings && (
              <>
                <ThemeSettings />
                <div
                  className="fixed w-screen inset-0 bg-[black]/60 z-50"
                  onClick={() => setThemeSettings(false)}
                />
              </>
            )}
          </div>
          {/* Main Content */}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg bg-main-bg md:ml-72 w-full min-h-screen'
                : 'dark:bg-main-dark-bg bg-main-bg w-full min-h-screen'
            }
          >
            <div className="md:static">
              <Navbar />
            </div>
            <div className="m-6 ml-8">
              <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-[#34373e] bg-white rounded-3xl">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  )
}
