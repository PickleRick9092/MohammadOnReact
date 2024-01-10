import React from 'react'

const MenuButton = ({item}) => {
    const aHandler = ()=>{
        alert('nigga why are u clicking on me?')
    }
  return (
    <div>
      <a onClick={aHandler}>{item.text}</a>
    </div>
  )
}

export default MenuButton
