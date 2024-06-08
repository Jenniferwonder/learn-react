import { pageLinks } from '@data/dummy'
import { useStateContext } from '@contexts/ContextProvider'
import SideList from './SideList'

export default function Sidebar() {
  const { activeMenu } = useStateContext()
  return (
    <div className="px-5 pt-1 pb-10 z-[100] ">
      {activeMenu && (
        <>
          {/* Sidebar List */}
          <div className="w-72 -ml-6 h-[100vh] pt-16 px-5 shadow-lg bg-main-bg dark:bg-secondary-dark-bg font-semibold fixed overflow-auto md:overflow-hidden md:hover:overflow-auto z-[100]">
            {/* Dashboard List */}
            <SideList group={pageLinks[0]} icon="i-carbon-chart-bar" />
            {/* Basic-demo List */}
            <SideList group={pageLinks[1]} icon="i-carbon-demo" setSubOpen={false} />
          </div>
        </>
      )}
    </div>
  )
}
