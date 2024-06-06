import { useStateContext } from '@contexts/ContextProvider'
import Details from './Details'
import IconLink from './IconLink'

export default function SideList({ group }) {
  const { currentColor, activeMenu, setActiveMenu, screenSize }
    = useStateContext()
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1024)
      setActiveMenu(false)
  }
  return (
    <div>
      <Details title={group.name.toUpperCase()}>
        {group.links.map(item => (
          <ul key={item.name} className="ml-3">
            {item.links
              ? (
                <>
                  <Details
                    title={item.name}
                  >
                    {item.links.map(link => (
                      <li key={link.name}>
                        <IconLink to={`/learn-react/${group.name}/${link.name}`} item={item} link={link} onClick={handleCloseSideBar} currentColor={currentColor} icon="i-mdi-minus" />
                      </li>
                    ))}
                  </Details>
                </>
                )
              : (
                <div className="-ml-3">
                  <IconLink to={`/learn-react/${group.name}/${item.name}`} item={item} onClick={handleCloseSideBar} currentColor={currentColor} />
                </div>
                )}
          </ul>
        ))}
      </Details>
    </div>
  )
}
