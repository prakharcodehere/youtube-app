import React from 'react'
import {Typography, Card, CardContent, CardMedia} from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import {Link } from "react-router-dom";
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail}) =>  (
    <Box sx={{boxShadow: "none",
    borderRadius: "20px",
    }}>
<Link to={`/channel/${channelDetail?.id?.channelId}`}>
<CardContent sx={{ display: "flex", flexDirection: "column",
justifyContent: "center" ,  textAlign: "center", color: "#fff"
}}></CardContent>
<CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
alt ={channelDetail?.snippet?.title}
sx={{borderRadius: "50%", height: "180px",
width: "180px", mb: 2}}>

</CardMedia>
</Link>
    </Box>
  ) 

export default ChannelCard
