import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export function ContextProvider({ children }) {
  const [currentMenu, setCurrentMenu] = useState('')
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [isDark, setIsDark] = useState(false)
  const [themeSettings, setThemeSettings] = useState(false)
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)

  const toggleMode = () => {
    setIsDark(!isDark)
    console.log(isDark)
    localStorage.setItem('isDark', isDark)
  }

  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
  }

  const handleClick = clicked =>
    setIsClicked({ ...initialState, [clicked]: true })

  const toggleMenu = (value) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? '' : value
    })
  }

  return (
    <StateContext.Provider
      value={{
			  isClicked,
			  currentColor,
			  isDark,
			  activeMenu,
			  screenSize,
			  initialState,
			  themeSettings,
        currentMenu,
        toggleMenu,
			  handleClick,
			  setScreenSize,
			  setIsClicked,
			  setActiveMenu,
			  setCurrentColor,
			  setIsDark,
			  toggleMode,
			  setColor,
			  setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
