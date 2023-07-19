import React, { useContext } from 'react'
import PortalContext from '../PortalContext'

const Main = () => {
    const {user, setUser} = useContext(PortalContext) 
  return (
    <div className='Main'>hello</div>
  )
}

export default Main