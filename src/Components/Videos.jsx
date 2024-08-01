import React from 'react';
import { Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
        py: 3,
      }}
    >
      {videos.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            width: { xs: '100%', sm: '48%', md: '30%' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
