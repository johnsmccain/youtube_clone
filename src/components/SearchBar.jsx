import React,{useState} from 'react'
import { IconButton, Paper } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { useStateContext } from '../context/StateContextProvider';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const history = useHistory();
  const navigate = useNavigate()
  const {fetchData} = useStateContext();
  const onhandleSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
    // history
    
    fetchData(`search?part=snippet&q=${searchTerm}`);
   
  }

  return (
    <Paper 
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: 5
      }}

    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => {
          if (e.target.value !== ''){
            setSearchTerm(e.target.value);
          }
        }}
      />
      <IconButton type='submit'  sx={{p:"10px"}} aria-label='search'>
          
         Q
      </IconButton>
    </Paper>
  )
}

export default SearchBar