import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoThumbnailUrl } from "../utils/constants";

const PlaylistCard = ({ playlistDetail }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
      }}
    >
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
            image={playlistDetail?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={playlistDetail?.snippet?.title}
            sx={{
              borderRadius: '0%',
              height: '180px',
              width: '180px'
            }}
          />
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {playlistDetail?.snippet?.title}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default PlaylistCard;
