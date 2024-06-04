import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

// import AnimateHeight from 'react-animate-height'
import { useStateContext } from '../contexts/ContextProvider'
import { pageLinks } from '../data/dummy'

export default function Sidebar() {
  const { currentColor, activeMenu, setActiveMenu, screenSize }
		= useStateContext()
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1024)
      setActiveMenu(false)
  }
  const activeLink
		= 'flex items-center gap-5 pl-4 pt-2 pb-1.5 rounded-lg  text-white  text-md m-2'
  const normalLink
		= 'flex items-center gap-5 pl-4 pt-2 pb-1.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <div className="px-5 pt-1 pb-10 z-[100] fixed bg-main-bg shadow-lg dark:bg-secondary-dark-bg">
      {activeMenu && (
        <>
          {/* Site Title and Toggle Button */}
          <div className="flex items-center ">
            <Link
              to="/learn-react"
              className="flex items-center gap-3 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <i className="text-3xl i-mdi-library" />
              <span>Learn React</span>
            </Link>
            <button onClick={() => setActiveMenu(false)} className="flex items-center p-1 text-xl rounded-full ml-14 dark:bg-light-gray hover:bg-light-gray">
              <i className="i-mdi-chevron-double-left" style={{ color: currentColor }}></i>
            </button>
          </div>
          {/* Sidebar List */}
          <div className="mt-3 h-[90vh] overflow-auto md:overflow-hidden md:hover:overflow-auto">

            {pageLinks.map(item => (
              <ul key={item.title} className="relative font-semibold space-y-0.5 p-4 py-0">
                <Details
                  item={item}
                >
                  <ul>
                    {item.links.map(link => (
                      <NavLink
                        to={`/learn-react/${link.name}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : '',
                        })}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink}
                      >
                        {link.icon}
                        <span className="capitalize ">{link.name}</span>
                      </NavLink>
                    ))}
                  </ul>
                </Details>
              </ul>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function Details({ item, children }) {
  const [isOpen, setIsOpen] = useState(true)
  const detailsRef = useRef(null)
  function toggleOpen(newValue) {
    newValue = detailsRef.current?.open
    if (newValue !== undefined && newValue !== isOpen) {
      // console.log('Setting isOpen', newValue)
      setIsOpen(newValue)
    }
  }

  useEffect(() => {
    detailsRef.current?.addEventListener('toggle', toggleOpen)

    return () => {
      detailsRef.current?.removeEventListener('toggle', toggleOpen)
    }
  }, [toggleOpen])

  return (
    <details open={isOpen} ref={detailsRef}>
      <summary className="dark:focus:text-black list-none cursor-pointer pl-3 pt-2 pb-1.5 my-1 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray focus:bg-light-gray ml-0">
        {item.title}
        {/* <i className={`${currentMenu === `${item.title}` ? 'i-mdi-chevron-down' : 'i-mdi-chevron-right'} ml-4 mb-1 text-xl`} /> */}
        <i className={`${isOpen ? 'i-mdi-chevron-down' : 'i-mdi-chevron-right'} ml-4 mb-1 text-xl`} />
      </summary>
      {children}
    </details>
  )
}
