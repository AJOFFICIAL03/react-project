import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const Header = () => {
  const name = useContext(MyContext)
  return (
    <div>I an Header {name} </div>
  )
}

export default Header