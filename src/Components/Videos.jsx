import React from 'react';
import { Box } from '@mui/material';
import { VideoCard, ChannelCard, Playlists } from './';

const Videos = ({ videos }) => {
  // Filter out only playlists
  const filteredPlaylists = videos.filter(item => item.id.playlistId);

  // Include videos and channels together, exclude playlists
  const filteredVideosAndChannels = videos.filter(item => item.id.videoId || item.id.channelId);

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
      {filteredVideosAndChannels.map((item, idx) => (
        <Box
          key={`item-${idx}`}
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
