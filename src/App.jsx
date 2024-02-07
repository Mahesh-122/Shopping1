import { useState } from 'react'
import ProductList from './features/product/ProductList'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ProductList/>
      </div>
    </>
  )
}

export default App
