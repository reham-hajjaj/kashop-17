import { Box, Button, Divider, Typography } from '@mui/material'
import Peaper from '@mui/material/Paper'
import React from 'react'

export default function CartSummary({total}) {
  return (
    <Peaper sx={{p:3}}>
        <Typography variant='h4' sx={{p:3}}>
            Order Summary
        </Typography>
        <Divider/>
        <Box>

        </Box>
        <Typography>Total Price:${total}</Typography>
        <Button variant='contained' fullWidth>Checkout</Button>
    </Peaper>
  )
}

