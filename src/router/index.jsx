import { createBrowserRouter } from 'react-router-dom'
import BlankLayout from '@layouts/BlankLayout'
import DefaultLayout from '@layouts/DefaultLayout'
import ChartLayout from '@layouts/ChartLayout'
import { routes } from './routes'

const finalRoutes = routes.map((route) => {
  return {
    ...route,
    // element: route.layout === 'blank' && <BlankLayout /> : <DefaultLayout />,
    element: route.layout === 'chart' ? <ChartLayout /> : <DefaultLayout />,
  }
})

const router = createBrowserRouter(finalRoutes)
// const router = createBrowserRouter(routes)

export default router
