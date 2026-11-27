import { useState } from "react";
import useCart from "../../hooks/useCart";

import {
  Box,
  Paper,
  Typography,
  CircularProgress,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useCheckout from "../../hooks/useCheckout";

function Checkout() {
  const { data, isLoading, isError, error } = useCart();
const {
  mutate: checkout} = useCheckout();

  const [paymentMethod, setPaymentMethod] = useState("cash");

  if (isLoading) return <CircularProgress />;

  if (isError) {
    return <Box>{error?.message}</Box>;
  }

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        p: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Checkout
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr",
          },
          gap: 3,
          alignItems: "start",
        }}
      >
        {/* Products Table */}

        <Box>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={3}>
              Order Items
            </Typography>

            <TableContainer>
              <Table sx={{ minWidth: 500 }}>
                <TableHead>
                  <TableRow sx={{ bgcolor: "action.hover" }}>
                    <TableCell>
                      Product
                    </TableCell>

                    <TableCell align="center">
                      Price
                    </TableCell>

                    <TableCell align="center">
                      Quantity
                    </TableCell>

                    <TableCell align="right">
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data?.items?.map((item) => (
                    <TableRow key={item.productId}>
                      <TableCell>
                        <Typography fontWeight="bold">
                          {item.productName}
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        ${item.price}
                      </TableCell>

                      <TableCell align="center">
                        {item.count}
                      </TableCell>

                      <TableCell align="right">
                        <Typography fontWeight="bold">
                          ${item.totalPrice}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>

        {/* Order Summary */}

        <Paper
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Order Summary
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography color="text.secondary">
              Subtotal
            </Typography>

            <Typography fontWeight="bold">
              ${data?.cartTotal}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Typography fontWeight="bold">
              Total Price
            </Typography>

            <Typography
              fontWeight="bold"
              color="primary"
              variant="h6"
            >
              ${data?.cartTotal}
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

         <Typography variant="h6" fontWeight="bold" mb={2}>
  Payment Method
</Typography>

<ToggleButtonGroup
  value={paymentMethod}
  exclusive
  fullWidth
  onChange={(event, newValue) => {
    if (newValue !== null) {
      setPaymentMethod(newValue);
    }
  }}
>
  <ToggleButton value="Visa">
    Visa
  </ToggleButton>

  <ToggleButton value="cash">
    Cash
  </ToggleButton>
</ToggleButtonGroup>
          <Button
  variant="contained"
  fullWidth
  sx={{
    mt: 3,
    py: 1.5,
    borderRadius: 2,
  }}
  onClick={() => checkout({ paymentMethod })}
>
  Pay Now
</Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Checkout;