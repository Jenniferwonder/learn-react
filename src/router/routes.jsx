// ref: https://stackoverflow.com/questions/74566649/createbrowserrouter-how-to-nest-child-routes-inside-another-route-that-itself-is/78214668#78214668
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
import DefaultLayout from '@layouts/DefaultLayout'

// ref: https://stackoverflow.com/questions/78098860/typeerror-cannot-destructure-property-basename-of-react2-usecontext-as

const routes = [
  {
    path: '/learn-react/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ReactBasicDemo /> },
      { path: '/learn-react/basics', element: <ReactBasicDemo /> },
      { path: '/learn-react/useState', element: <StateDemo /> },
      { path: '/learn-react/useReducer', element: <ReducerDemo /> },
      { path: '/learn-react/useContext', element: <ContextDemo /> },
      { path: '/learn-react/useRef', element: <RefDemo /> },
      { path: '/learn-react/useEffect', element: <EffectDemo /> },
      { path: '/learn-react/useMemo', element: <MemoDemo /> },
      { path: '/learn-react/product-table', element: <ProductTableApp /> },
      { path: '/learn-react/tic-tac-toe', element: <TicTacToe /> },
      { path: '/learn-react/to-do-app', element: <ToDoApp /> },
      { path: '/learn-react/react-query', element: <Blank /> },
      {
        path: '/learn-react/router-dom',
        element: <RouterApp />,
        loader: rootLoader,
        action: rootAction,
        children: [
          { index: true, element: <Index /> },
          {
            path: '/learn-react/router-dom/contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
          },
          // We want it to be rendered in the root route's outlet, so we made it a sibling to the existing child route
          {
            path: '/learn-react/router-dom/contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: '/learn-react/router-dom/contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]
export { routes }
