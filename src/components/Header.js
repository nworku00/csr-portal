import React from 'react'
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import './Components.css'
const Header = () => {
  return (
      <div className='Header'>
          <img src={require("../logo-no-background.png")} alt="" height={50} />
          <IconButton>
              <HomeIcon fontSize='large'></HomeIcon>
         </IconButton>
    </div>
  )
}

export default Header