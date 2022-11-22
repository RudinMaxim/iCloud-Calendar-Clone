import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'

function Header(title) {
  title = 'HOME'
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header