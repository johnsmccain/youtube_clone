import { Box } from '@mui/material';
import React from 'react'
import { useStateContext } from '../context/StateContextProvider'
import Loader from './Loader';
import VideoItem from './VideoItem';

const SearchFeed = () => {
  const {data, loading } = useStateContext();

  if (loading){
    return <Loader/>
  }

  return (

    <Box
      sx={{
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        p: 1,
        mt: 10,
      }}
    >
      {data.length !== 0 && data.map((video) => (
          <VideoItem
            key={video?.id?.videoId}
            video={video}
            id={video?.id?.videoId}  
          />
      ))}
    </Box>
  )
}

export default SearchFeed