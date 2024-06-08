import { useStateContext } from '@contexts/ContextProvider'
import Details from './Details'
import IconLink from './IconLink'

export default function SideList({ group, icon }) {
  const { currentColor, activeMenu, setActiveMenu, screenSize }
    = useStateContext()
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1024)
      setActiveMenu(false)
  }
  return (
    <div>
      <Details title={group.name.toUpperCase()} icon={icon}>
        {group.links.map(item => (
          <ul key={item.name} className="ml-3">
            {item.links
              ? (
                <div className="ml-2">
                  <Details
                    title={item.name}
                  >
                    {item.links.map(link => (
                      <li key={link.name}>
                        <IconLink to={`/${group.name}/${link.name}`} item={item} link={link} onClick={handleCloseSideBar} currentColor={currentColor} icon="i-mdi-minus" />
                      </li>
                    ))}
                  </Details>
                </div>
                )
              : (
                <div className="-ml-1">
                  <IconLink to={`/${group.name}/${item.name}`} item={item} onClick={handleCloseSideBar} currentColor={currentColor} />
                </div>
                )}
          </ul>
        ))}
      </Details>
    </div>
  )
}
