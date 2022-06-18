import { useState } from 'react'
import axios  from 'axios'
import './App.css'
import { Feed, Navbar, SearchFeed, VideoDetail } from './components'
import {Box} from '@mui/material'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
 
// const StateContext = createContext();
const baseUrl = 'https://www.googleapis.com/youtube/v3';

function App() {


  return (
    <BrowserRouter>
      <Box sx={{ p: 1 }}>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Feed/>}/>
          <Route path='/video-details/:id' element={<VideoDetail/>}/>
          <Route path='/search' element={<SearchFeed/>}/>
      
        </Routes>
      </Box>
    </BrowserRouter>
    
  )
}

export default App
