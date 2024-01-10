import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NiggaPic from './components/NiggaPic'
import Header from './components/Header'
import MenuButton from './components/MenuButton'


function App() {
  const Buttons = [
    {text:'Homie'},
    {text:'whats up nigga?'},
    {text:'How Dear You Call me Nigga?'},
  ]

  return (
    <div className='main'>
<div >

<Header>
{
Buttons.map((item) => (
          <MenuButton item={item} />
        ))}
</Header>
<NiggaPic/>

    </div>
</div>
  )
}

export default App
