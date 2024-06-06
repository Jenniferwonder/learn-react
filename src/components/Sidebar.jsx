import { NavLink } from 'react-router-dom'
import { useStateContext } from '@contexts/ContextProvider'
import { pageLinks } from '@data/dummy'
import Details from './Details'
import IconLink from './IconLink'

export default function Sidebar() {
  const { currentColor, activeMenu, setActiveMenu, screenSize }
		= useStateContext()
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1024)
      setActiveMenu(false)
  }
  return (
    <div className="px-5 pt-1 pb-10 z-[100] ">
      {activeMenu && (
        <>
          {/* Sidebar List */}
          <div className="w-72 -ml-6 h-[100vh] pt-16 px-5 shadow-lg bg-main-bg dark:bg-secondary-dark-bg font-semibold fixed overflow-auto md:overflow-hidden md:hover:overflow-auto z-[100]">
            {pageLinks.map(item => (
              <ul key={item.name} className="">
                {item.links
                  ? (
                    <>
                      <Details
                        title={item.name.toUpperCase()}
                      >
                        {item.links?.map(link => (
                          <li key={link.name}>
                            {link.links
                              ? (
                                <div className="ml-3">
                                  <Details title={link.name}>
                                    <ul>
                                      {link.links.map(subLink => (
                                        <li key={subLink.name}>
                                          <IconLink
                                            item={item}
                                            link={subLink}
                                            onClick={handleCloseSideBar}
                                            currentColor={currentColor}
                                            icon="i-mdi-minus"
                                          />
                                        </li>
                                      ))}
                                    </ul>
                                  </Details>
                                </div>
                                )
                              : (
                                <>
                                  <IconLink item={item} link={link} onClick={handleCloseSideBar} currentColor={currentColor} />
                                </>
                                )}
                          </li>
                        ))}

                      </Details>
                    </>
                    )
                  : (
                    <>
                      <IconLink item={item} link="" onClick={handleCloseSideBar} currentColor={currentColor} />
                    </>
                    )}
              </ul>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
