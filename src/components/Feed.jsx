import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal';
import { useStateContext } from '../context/StateContextProvider'
import Loader from './Loader';
import VideoItem from './VideoItem';
const Feed = () => {
  const {fetchData, data, loading, results, fetchOtherData} = useStateContext();
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    if (keyword){
      fetchData(`search?part=snippet&q=${keyword}`);
    }else{
      fetchData(`search?part=snippet&chart=mostPopular`);
    }
    fetchOtherData('videoCategories?part=snippet');
    document.title ='U2UP'

  }, [keyword])
  if (loading ){
    return <Loader/>
  }
  return (
    <Box>
      <Box
        className='categories'
        sx={{
          display: 'flex',
          gap: 5,
          overflow: 'auto',
          height: '100px',
          mt: 10
        }}
      >
        <HorizontalScroll reverseScroll={true}>
          {results?.map((category)=> (
            <Button
              className='category-button'
              onClick={() => setKeyword(category.snippet.title)}
              sx={{
                width: '170px',
                height: '50px',
                background: '#F9F9F9',
                borderRadius: 20,
                color: 'black',
                cursor: 'pointer',
                fontWeight: 600,
                mt: 1,
                ml: 1,
              }}
              key={category?.id}
            >
              {category?.snippet?.title}
            </Button>
          ))}
        </HorizontalScroll>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItem: 'center',
          gap: 2,
          p: 1,
        }}
      >
        <Typography sx={{fontSize:25, fontWeight: 900, p: 3, pb: 1, pt: 0}}>
          {keyword || 'Recommended'} Videos
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          p: 1,
        }}>
          {data?.map((video) => (
            <VideoItem
              video={video}
              id={(video.id.video_id && video.id.video_id)}
              key={(video.id.video_id && video.id.video_id)}
            />
          ))}
        </Box>
    </Box>
  )
}

export default Feed