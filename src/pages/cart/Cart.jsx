import React from 'react';

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
  IconButton
} from '@mui/material';

import { Link,  useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { useAuthStore } from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import useClearCart from '../../hooks/useClearCart';

function Cart() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const token = useAuthStore((state) => state.token);

  const { mutate: clearCart, isPending: isClearing } = useClearCart();
  const { data, isPending, isError } = useCart();

  if (!token) {
    return (
      <Box sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {t('cart.loginMessage')}
        </Typography>

        <Button component={Link} to="/login" variant="contained">
          {t('cart.login')}
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
        {t('cart.error')}
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
      <Box sx={{ position: 'relative' }}>
        <IconButton
          color="error"
          onClick={() => clearCart()}
          disabled={isClearing}
          title={t('cart.clearCart')}
        >
          <DeleteSweepIcon />
        </IconButton>

        <Box sx={{ pt: 4 }}>
          {data?.items?.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Box>
      </Box>

      <Box>
        <CartSummary total={data?.cartTotal} />
      </Box>
    </Box>
  );
}

export default Cart;