import { Box, Paper, Typography, Rating } from '@mui/material';
import React from 'react';

function ReviewItem({ review }) {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box>
        <Typography>
          {review.userName}
        </Typography>

        <Typography>
          {new Date(review.createdAt).toLocaleString()}
        </Typography>
      </Box>

      <Rating value={review.rating} readOnly />

      <Typography>
        {review.comment}
      </Typography>
    </Paper>
  );
}

export default ReviewItem;