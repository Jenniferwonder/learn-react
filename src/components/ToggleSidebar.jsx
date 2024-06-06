import React from 'react'
import { useStateContext } from '@contexts/ContextProvider'

export default function ToggleSidebar() {
  const { currentColor, activeMenu, setActiveMenu }
  = useStateContext()
  return (
    <button onClick={() => setActiveMenu(!activeMenu)} className="flex items-center p-1 text-xl rounded-full ml-14 dark:bg-light-gray hover:bg-light-gray">
      {activeMenu
        ? <i className="i-mdi-chevron-double-left" style={{ color: currentColor }} />
        : <i className="i-mdi-menu" style={{ color: currentColor }} />}
    </button>
  )
}
