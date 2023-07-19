import React, {useContext} from 'react'
import PortalContext from '../PortalContext'

const UserProfile = () => {
    const {user, setUser} = useContext(PortalContext) 
  return (
    <div className='UserProfile'></div>
  )
}

export default UserProfile