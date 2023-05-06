'use client'

import { AppBar, Toolbar, Typography, Container } from '@mui/material'

import React from 'react'

function Navbar() {
  return (
    <div>
      <Container>
      <AppBar position= "fixed" color="primary">
        <Toolbar>
          <Typography variant = 'h3' fontFamily="times new roman">
              Hello
          </Typography>
        </Toolbar>
      </AppBar>
      </Container>
    </div>
  )
}

export default Navbar