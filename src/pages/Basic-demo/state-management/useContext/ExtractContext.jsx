// Ref: https://react.dev/reference/react/useContext
// Extract context
// Done-20240320 Good
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)
const CurrentUserContext = createContext(null)

export default function ExtractContext() {
  const [theme, setTheme] = useState('dark')
  return (
    <>
      <h2>Extract Context</h2>
      <MyProviders theme={theme} setTheme={setTheme}>
        <WelcomePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={(e) => {
						  setTheme(e.target.checked ? 'light' : 'dark')
            }}
          />
          Use light mode
        </label>
      </MyProviders>
    </>
  )
}

function MyProviders({ children, theme }) {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
				  currentUser,
				  setCurrentUser,
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  )
}

function WelcomePanel() {
  const { currentUser } = useContext(CurrentUserContext)
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  )
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext)
  return (
    <p>
      You logged in as
      {currentUser.name}
      .
    </p>
  )
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const canLogin = firstName !== '' && lastName !== ''
  const theme = useContext(ThemeContext)
  const className = `input-${theme}`
  return (
    <>
      <label>
        First name
        {': '}
        <input
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          className={className}
        />
      </label>
      <label>
        Last name
        {': '}
        <input
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          className={className}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
				  setCurrentUser({
				    name: `${firstName} ${lastName}`,
				  })
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext)
  const className = `panel-${theme}`
  return (
    <section className={className}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext)
  const className = `button-${theme}`
  return (
    <button type="button" className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
