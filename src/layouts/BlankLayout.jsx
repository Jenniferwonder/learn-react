import { Outlet } from 'react-router-dom'
import App from '../App'

export default function BlankLayout() {
  return (
    <App>
      <div className="min-h-screen text-black dark:text-white-dark">
        <Outlet />
      </div>
    </App>
  )
};
