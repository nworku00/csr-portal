import React, {useContext} from 'react'
import PortalContext from '../PortalContext'

const UserProfileEdit = () => {
    const {user, setUser} = useContext(PortalContext) 
  return (
    <div className='UserProfileEdit'></div>
  )
}

export default UserProfileEdit