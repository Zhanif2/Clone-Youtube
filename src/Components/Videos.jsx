import React from 'react';
import { Box } from '@mui/material';
import { VideoCard, ChannelCard, Playlists } from './';

const Videos = ({ videos }) => {
  // Separate the data into videos, channels, and playlists
  const filteredVideos = videos.filter(item => item.id.videoId);
  const filteredChannels = videos.filter(item => item.id.channelId);
  const filteredPlaylists = videos.filter(item => item.id.playlistId);

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
      {filteredVideos.map((item, idx) => (
        <Box
          key={`video-${idx}`}
          sx={{
            width: { xs: '100%', sm: '48%', md: '30%' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <VideoCard video={item} />
        </Box>
      ))}
      {filteredChannels.map((item, idx) => (
        <Box
          key={`channel-${idx}`}
          sx={{
            width: { xs: '100%', sm: '48%', md: '30%' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ChannelCard channelDetail={item} />
        </Box>
      ))}
      {filteredPlaylists.map((item, idx) => (
        <Box
          key={`playlist-${idx}`}
          sx={{
            width: { xs: '100%', sm: '48%', md: '30%' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Playlists playlistDetail={item} />
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
