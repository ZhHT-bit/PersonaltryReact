import Home from '../home/home.js'
import Detail from '../detail/detail.js';
import Notice from '../notice/notice.js';
import { createBrowserRouter } from 'react-router-dom'

const routerPC = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/detail',
    element: <Detail></Detail>
  },
  {
    path: '/notice',
    element: <Notice></Notice>
  },
])

const routerMb = createBrowserRouter([
  {
    path: '/',
    element: <Detail></Detail>
  },
  {
    path: '/notice',
    element: <Notice></Notice>
  },
])

export { routerMb, routerPC }