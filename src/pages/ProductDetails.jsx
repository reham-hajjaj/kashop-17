import React from 'react';
import { useParams, useNavigate } from 'react-router';

import UseProduct from '../hooks/UseProduct';
import useAddToCart from '../hooks/useAddToCart';
import { useAuthStore } from '../store/useAuthStore';
import ReviewItem from '../components/ReviewItem';

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
import { Bounce, toast } from 'react-toastify';

function ProductDetails() {
  const navigate = useNavigate();

  const token = useAuthStore((state) => state.token);

  const { id } = useParams();

  const {
    mutate: addToCart,
    isPending: addToCartPending
  } = useAddToCart();

  const {
    data,
    isPending,
    isError
  } = UseProduct(id);

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError || !data) {
    return (
      <Alert severity="error">
        Failed to load product details.
      </Alert>
    );
  }

  const inStock = Number(data.quantity) > 0;

  const handleAddToCart = () => {
    console.log('Button clicked');
    console.log('Token:', token);
    console.log('Product:', data.id);
    console.log('Quantity:', data.quantity);

    if (!token) {
      navigate('/login');
      return;
    }

    if (!inStock) {
      alert('Product is out of stock');
      return;
    }

    addToCart(data.id, {
      onSuccess: (response) => {
        toast('added to cart', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
})
        console.log('Success:', response);
        alert('Product added to cart successfully!');
      },
      

      onError: (error) => {
        console.log('Error:', error);
        console.log('Error response:', error.response?.data);

        alert(
          error.response?.data?.message ||
          'Failed to add product to cart'
        );
      }
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr'
          },
          gap: 4,
          p: 2
        }}
      >
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={data.image}
            alt={data.name}
            sx={{
              maxHeight: 400,
              objectFit: 'contain'
            }}
          />

          <CardContent />
        </Card>

        <Box>
          <Typography variant="h4" gutterBottom>
            {data.name}
          </Typography>

          <Rating
            value={Number(data.rate) || 0}
            readOnly
          />

          <Typography
            variant="h4"
            color="primary"
            sx={{ my: 2 }}
          >
            ${data.price}
          </Typography>

          <Chip
            label={inStock ? 'In Stock' : 'Out of Stock'}
            color={inStock ? 'success' : 'error'}
            sx={{ mb: 2 }}
          />

          <Typography sx={{ mb: 3 }}>
            {data.description}
          </Typography>

          <Button
            variant="contained"
            size="small"
            disabled={addToCartPending || !inStock}
            onClick={handleAddToCart}
          >
            {addToCartPending
              ? 'Adding...'
              : 'Add to Cart'}
          </Button>
        </Box>
      </Box>

      <Divider sx={{ mt: 3, mb: 3 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        Customer Reviews
      </Typography>

      {data.reviews?.length > 0 ? (
        data.reviews.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))
      ) : (
        <Typography color="text.secondary">
          No reviews yet.
        </Typography>
      )}
    </>
  );
}

export default ProductDetails;