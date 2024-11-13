import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Back from './assets/properties/organisms/back/back'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Back/>
    </div>
  )
}

export default App
