import React from 'react'


const NiggaPic = () => {
    const ClickHandler=()=>{
        alert("YOU BECAME NIGGA! WELCOME NIGGER LAND! YOUR TOUR LEADER IS ARASH KOONE PARASH")
    }
  return (
    <div>
          <h2 className='h2'>Nigga Please!</h2>
  <h3>This site Warn You</h3>
  <h3>Do Not Click On the Picture Below!</h3>
      <button onClick={ClickHandler}>

        <img src="/arash.webp" alt="" />
      </button>
    </div>
  )
}

export default NiggaPic
