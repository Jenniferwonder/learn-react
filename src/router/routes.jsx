// ref: https://stackoverflow.com/questions/74566649/createbrowserrouter-how-to-nest-child-routes-inside-another-route-that-itself-is/78214668#78214668
import Sales from '@Dashboard/Sales.jsx'
import Analytics from '@Dashboard/Analytics'
import Finance from '@Dashboard/Finance'
import DefaultLayout from '@layouts/DefaultLayout'
import ChartLayout from '@layouts/ChartLayout'
import RouterApp, {	action as rootAction,	loader as rootLoader } from '@Basic-demo/react-router/RouterApp.jsx'
import ErrorPage from '@Basic-demo/react-router/ErrorPage.jsx'
import Contact, {	loader as contactLoader } from '@Basic-demo/react-router/Contact.jsx'
import EditContact, {	action as editAction } from '@Basic-demo/react-router/EditContact.jsx'
import { action as destroyAction } from '@Basic-demo/react-router/Destroy.jsx'
import Index from '@Basic-demo/react-router/Index'
import StateDemo from '@Basic-demo/state-management/useState/StateDemo.jsx'
import RefDemo from '@Basic-demo/hooks/ref/RefDemo.jsx'
import ReactBasicDemo from '@Basic-demo/basics/ReactBasicDemo.jsx'
import ReducerDemo from '@Basic-demo/state-management/useReducer/ReducerDemo'
import ContextDemo from '@Basic-demo/state-management/useContext/ContextDemo'
import EffectDemo from '@Basic-demo/hooks/effects/EffectDemo'
import MemoDemo from '@Basic-demo/hooks/memo/MemoDemo.jsx'
import ProductTableApp from '@Basic-demo/react-mini-app/product-table-app/ProductTableApp.jsx'
import Blank from '@Basic-demo/Blank.jsx'
import ToDoApp from '@Basic-demo/react-mini-app/todolist/ToDoApp'
import TicTacToe from '@Basic-demo/react-mini-app/tic-tac-toe/TicTacToe.jsx'

// ref: https://stackoverflow.com/questions/78098860/typeerror-cannot-destructure-property-basename-of-react2-usecontext-as

const routes = [
  {
    path: '/',
    element: <ChartLayout />,
    errorElement: <ErrorPage />,
    layout: 'chart',
    children: [
      { index: true, element: <Sales /> },
      // Dashboard
      { path: '/Dashboard/sales', element: <Sales /> },
      { path: '/Dashboard/analytics', element: <Analytics /> },
      { path: '/Dashboard/finance', element: <Finance /> },
    ],
  },
  {
    path: '/Basic-demo/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ReactBasicDemo /> },
      { path: '/Basic-demo/basics', element: <ReactBasicDemo /> },
      { path: '/Basic-demo/useState', element: <StateDemo /> },
      { path: '/Basic-demo/useReducer', element: <ReducerDemo /> },
      { path: '/Basic-demo/useContext', element: <ContextDemo /> },
      { path: '/Basic-demo/useRef', element: <RefDemo /> },
      { path: '/Basic-demo/useEffect', element: <EffectDemo /> },
      { path: '/Basic-demo/useMemo', element: <MemoDemo /> },
      { path: '/Basic-demo/product-table', element: <ProductTableApp /> },
      { path: '/Basic-demo/tic-tac-toe', element: <TicTacToe /> },
      { path: '/Basic-demo/to-do-app', element: <ToDoApp /> },
      { path: '/Basic-demo/react-query', element: <Blank /> },
      {
        path: '/Basic-demo/router-dom',
        element: <RouterApp />,
        loader: rootLoader,
        action: rootAction,
        children: [
          { index: true, element: <Index /> },
          {
            path: '/Basic-demo/router-dom/contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
          },
          // We want it to be rendered in the root route's outlet, so we made it a sibling to the existing child route
          {
            path: '/Basic-demo/router-dom/contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: '/Basic-demo/router-dom/contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
  // {
  //   path: '/learn-react/blank/',
  //   layout: 'blank',
  // },

]
export { routes }
