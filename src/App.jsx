import { useState } from 'react'
import './App.css'
import Back from './assets/properties/organisms/Back/Back'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Back/>
    </div>
  )
}

export default App
