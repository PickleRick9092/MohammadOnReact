import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NiggaPic from './components/NiggaPic'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
<div >

<NiggaPic/>

    </div>
</div>
  )
}

export default App
