import React from 'react'
import {useState,useEffect} from 'react';
import {Box ,Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import {fetchFromAPI} from '../utils/fetchFromAPI';
import  Videos from './Videos';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  //console.log("hello");
  useEffect(()=>{
    console.log("hi");
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto',height:'95vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
         SeARCH Results for: <span style={{color:'#F31503'}}>{searchTerm}</span>video
        </Typography>
        <Videos videos={videos} />
      </Box>
  )
}
export default SearchFeed