import { useStateContext } from '@contexts/ContextProvider'

export default function ToggleSidebar() {
  const { currentColor, activeMenu, setActiveMenu }
  = useStateContext()
  return (
    <button onClick={() => setActiveMenu(!activeMenu)} className="flex items-center p-1 ml-8 text-xl rounded-full dark:bg-light-gray hover:bg-light-gray">
      {activeMenu
        ? <i className="i-mdi-chevron-double-left" style={{ color: currentColor }} />
        : <i className="i-mdi-menu" style={{ color: currentColor }} />}
    </button>
  )
}
