import { NavLink } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { pageLinks } from '../data/dummy'
import Details from './Details'

export default function Sidebar() {
  const { currentColor, activeMenu, setActiveMenu, screenSize }
		= useStateContext()
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1024)
      setActiveMenu(false)
  }
  const activeLink
		= 'flex items-center gap-2 pl-4 pt-2 pb-1.5 rounded-lg  text-white  text-md m-2 ml-6'
  const normalLink
		= 'flex items-center gap-2 pl-4 pt-2 pb-1.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 ml-6'
  return (
    <div className="px-5 pt-1 pb-10 z-[100] ">
      {activeMenu && (
        <>
          {/* Sidebar List */}
          <div className="w-72 -ml-6 h-[100vh] pt-16 px-6  shadow-lg bg-main-bg dark:bg-secondary-dark-bg font-semibold fixed overflow-auto md:overflow-hidden md:hover:overflow-auto z-[100]">
            {pageLinks.map(item => (
              <ul key={item.title} className=" ">
                <Details
                  title={item.title}
                >
                  {item.links.map(link => (
                    <li key={link.name}>
                      {link.subLinks
                        ? (
                          <div className="ml-4">
                            <Details title={link.name}>
                              <ul>
                                {link.subLinks.map(subLink => (
                                  <NavLink
                                    to={`/learn-react/${subLink.name}`}
                                    key={subLink.name}
                                    onClick={handleCloseSideBar}
                                    style={({ isActive }) => ({
                                      backgroundColor: isActive ? currentColor : '',
                                    })}
                                    className={({ isActive }) =>
                                      isActive ? activeLink : normalLink}
                                  >
                                    <i className="i-mdi-minus text-xs" />
                                    <span className="capitalize">{subLink.name}</span>
                                  </NavLink>
                                ))}
                              </ul>
                            </Details>
                          </div>
                          )
                        : (
                          <>

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
                              <i className="i-mdi-minus text-xs" />
                              <span className="capitalize">{link.name}</span>
                            </NavLink>
                          </>
                          )}
                    </li>
                  ))}

                </Details>
              </ul>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
