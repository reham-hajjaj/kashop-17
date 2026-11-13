import React from 'react';

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography
} from '@mui/material';

import { Link } from 'react-router';
import { useAuthStore } from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';
import IconButton from '@mui/material/IconButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import useClearCart from '../../hooks/useClearCart';

function Cart() {

  const token = useAuthStore((state) => state.token);
const { mutate: clearCart, isPending: isClearing } = useClearCart();
  const { data, isPending, isError } = useCart();

  console.log(data);

  if (!token) {
    return (
      <Box sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Please login to view your cart
        </Typography>

        <Button component={Link} to="/login" variant="contained">
          Login
        </Button>
      </Box>
    );
  }

  if (isPending) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity="error">
        Failed to load cart items.
      </Alert>
    );
  }
return (
  <Box
    sx={{
      maxWidth: '1200px',
      mx: 'auto',
      p: 3,
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        md: '2fr 1fr',
      },
      gap: 3,
      alignItems: 'start',
    }}
  >

    {/* Cart Items - Left */}
    <Box sx={{ position: 'relative' }}>

      {/* Clear Cart Icon */}
     <IconButton
  color="error"
  onClick={() => clearCart()}
  disabled={isClearing}
>
  <DeleteSweepIcon />
</IconButton>
        
      <Box sx={{ pt: 4 }}>
        {data?.items?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Box>

    </Box>

    {/* Order Summary - Right */}
    <Box>
      <CartSummary total={data?.cartTotal} />
    </Box>

  </Box>
);
 
}

export default Cart;