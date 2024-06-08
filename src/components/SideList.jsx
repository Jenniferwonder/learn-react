import { useStateContext } from '@contexts/ContextProvider'
import Details from './Details'
import SideLink from './SideLink'

export default function SideList({ group, icon, setOpen, setSubOpen }) {
  const { currentColor, activeMenu, setActiveMenu, screenSize }
    = useStateContext()
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1024)
      setActiveMenu(false)
  }
  return (
    <div>
      <Details title={group.name.toUpperCase()} icon={icon} setOpen={setOpen}>
        {group.links.map(item => (
          <ul key={item.name} className="ml-3">
            {item.links
              ? (
                <div className="ml-2">
                  <Details
                    title={item.name}
                    setOpen={setSubOpen}
                  >
                    {item.links.map(link => (
                      <li key={link.name}>
                        <SideLink to={`/${group.name}/${link.name}`} item={item} link={link} onClick={handleCloseSideBar} currentColor={currentColor} icon="i-mdi-minus" />
                      </li>
                    ))}
                  </Details>
                </div>
                )
              : (
                <div className="-ml-1">
                  <SideLink to={`/${group.name}/${item.name}`} item={item} onClick={handleCloseSideBar} currentColor={currentColor} />
                </div>
                )}
          </ul>
        ))}
      </Details>
    </div>
  )
}
