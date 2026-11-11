import { Box, Button, Divider, Typography } from '@mui/material'
import Peaper from '@mui/material/Paper'
import React from 'react'

export default function CartSummary({total}) {
  return (
    <Peaper sx={{p:3}}>
        <Typography variant='h4' sx={{p:2}}>
            Order Summary
        </Typography>
        <Divider/>
        <Box>

        </Box>
        <Button variant='' fullWidth>Checkout</Button>
    </Peaper>
  )
}

