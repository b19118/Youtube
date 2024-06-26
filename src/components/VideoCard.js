import React from 'react'
import {Link} from 'react-router-dom';
import {Typography, Card,CardContent,CardMedia} from '@mui/material';
import {CheckCircle} from '@mui/icons-material'; 
const demoVideoUrl = '/video/GDa8kZLNhJ4';
 const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
 const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
 const demoChannelTitle = 'JavaScript Mastery';
 const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';


const VideoCard = ({video: {id: { videoId },snippet} }) => {
  return (
    <Card sx={{width:{xs:'100%', sm:'358px' ,md:'350px'},boxShadow:'none',borderRadius:'0'}}>
      <Link to = {videoId? `/video/${videoId}`:demoVideoUrl}>
      <CardMedia
      image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      sx={{width: {xs:'100%', sm:'370px', md:'350px'},height:180}}
      />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0,60)
             || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
           <CheckCircle sx={{fontSize:12,color:'gray', ml:'5px'}}>
           </CheckCircle>
          </Typography>
          </Link>
          </CardContent>
    </Card>
  )
}

export default VideoCard