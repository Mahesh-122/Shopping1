import { useState } from 'react'
import Home from './pages/Home'
import Login from './features/auth/components/LoginPage'
import Signup from './features/auth/components/SignupPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import LoginPage from './features/auth/components/LoginPage'
import SignupPage from './features/auth/components/SignupPage'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
