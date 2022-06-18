import React from 'react'
import { Box, Typography } from '@mui/material'
import {Link} from "react-router-dom"
import {SearchBar} from "."
const Navbar = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: "space-between",
      p:2,
      pt:1,
      borderBottom: "1px solid #e3e3e3",
      position: 'fixed',
      top: 0,

      left: 0,
      background: 'white',
      gap: '10',
      width: '100%',
      zIndex: 100,
    }}
    >
      <Link to='/' style={{textDecoration: 'none'}}>
        <Typography
          sx={{fontSize:25, color: 'red', fontWeight: 800}}
        >
          U2UP
        </Typography>
      </Link>
      <SearchBar/>
    </Box>
  )
}

export default Navbar