import React, {useContext} from 'react'
import PortalContext from '../PortalContext'

const AllUsers = () => {
    const {user, setUser} = useContext(PortalContext) 
  return (
    <div className='AllUsers'></div>
  )
}

export default AllUsers