import React from 'react'
import myimage from "../img/Netflix_Logo.png"

function Header() {
  return (
    <div className='absolute z-10'>
       <img className='w-48 px-2 pt-4 bg-gradient-to-b from-black' src={myimage} alt="LOGO"/>
    </div>
  )
}

export default Header
