import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { demoThumbnailUrl } from "../utils/constants"; // Replace with a relevant default image URL

const PlaylistCard = ({ playlistDetail }) => {
  const hasData = playlistDetail?.id?.playlistId && playlistDetail?.snippet?.thumbnails?.high?.url && playlistDetail?.snippet?.title;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '320px',
        margin: 'auto',
        backgroundColor: '#1e1e1e',
      }}
    >
      {hasData ? (
        <Link to={`/playlist/${playlistDetail.id.playlistId}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={playlistDetail.snippet.thumbnails.high.url || demoThumbnailUrl}
              alt={playlistDetail.snippet.title || "No Title"}
              sx={{ borderRadius: '10px', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
            />
            <Typography variant="h6">
              {playlistDetail.snippet.title || "No Title"}
            </Typography>
          </CardContent>
        </Link>
      ) : (
        <Box
          sx={{
            width: { xs: '356px', md: '320px' },
            height: '320px',
            backgroundColor: 'gray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            textAlign: 'center',
            borderRadius: '20px',
          }}
        >
          No Playlist Data
        </Box>
      )}
    </Box>
  );
};

export default PlaylistCard;
