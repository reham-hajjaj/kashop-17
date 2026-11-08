import React from 'react'

import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router';
import { useAuthStore } from '../../store/useAuthStore';

function Cart() {
     const token = useAuthStore((state) => state.token);
    
    const {data,isPending,isError}=useCart();
if(!token){
    return(
        <Box>
            <Typography>
                please login to view your cart
            </Typography>
            <Button component={Link} to="/login">
Login
            </Button>
        </Box>
    )
}
  return (
    <div>Cart</div>
  )
}

export default Cart;