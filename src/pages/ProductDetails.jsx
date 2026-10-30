import React from 'react';
import { useParams } from 'react-router';
import UseProduct from '../hooks/UseProduct';

import {
  Alert,
  CircularProgress,
  Typography,
  Box,
  CardMedia,
  Card,
  CardContent,
  Rating,
  Button,
  Chip,
  Divider
} from '@mui/material';

function ProductDetails() {
  const { id } = useParams();

  const { data, isPending, isError } = UseProduct(id);

  console.log(data);

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        Failed to load product details.
      </Alert>
    );
  }

  const inStock = data.quantity > 0;

  return (
    <>
  
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      gap: 4
    }}>

      <Card>
        <CardMedia
          component="img"
          height="300"
          image={data.image}
          sx={{ maxHeight: 400, objectFit: 'contain' }}
        />
        <CardContent />
      </Card>

      <Box>
        <Typography variant="h4">
          {data.name}
        </Typography>

        <Rating value={data.rate} readOnly />

        <Typography variant="h4" color="primary">
          ${data.price}
        </Typography>

        <Chip
          label={inStock ? 'In Stock' : 'Out of Stock'}
          color={inStock ? 'success' : 'error'}
        />

        <Typography>
          {data.description}
        </Typography>

        <Button variant="contained" disabled={!inStock}>
          Add to Cart
        </Button>
      </Box>

    </Box>
    <Divider sx={{mt:3,mb:3}}/>
    {data.reviews.map((reviwe)=>)}
    <Card>
        <Typography></Typography>
    </Card>
      </>
  );
}

export default ProductDetails;