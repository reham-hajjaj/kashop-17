import React from 'react'

import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router';
import { useAuthStore } from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';
function Cart() {
     const token = useAuthStore((state) => state.token);
    
    const {data,isPending,isError}=  useCart();
    console.log(data);
if(!token){
    return(
        <Box sx={{textAlign:'center',py:10}}>
            <Typography variant='h2' sx={{mb:2}}>
                please login to view your cart
            </Typography>
            <Button component={Link} to="/login">
Login
            </Button>
        </Box>
    )
}
if(isPending){
    return
    <CircularProgress/>
}
if(isError){
    return  <Alert severity="error">
            Failed to load cart items.
          </Alert>
}

  return (
    <Box sx={{display:'grid',gridTemplateColumns: {xs:'1rf', md:'2rf 1rf'},gap:4,}}>
        <Box>
         {data?.items.map((item)=>(
            <CartItem item={item}/>
         ))}
        </Box>
        <Box>
        <CartSummary total={data?.cartTotal}/>
        </Box>
    </Box>
  )
}

export default Cart;