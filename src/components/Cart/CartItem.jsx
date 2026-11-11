import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
function CartItem({item}) {
  console.log(item);
  return (
    <Paper sx={{p:2 ,mb:3,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <Box>
        <Typography>{item. productName}</Typography>
        <Typography>{item.price} each</Typography>
      </Box>
      <Typography>Quantity:{item.count}</Typography>
      <Typography>Total:${item.totalPrice}</Typography>
    </Paper>
  )
}

export default CartItem