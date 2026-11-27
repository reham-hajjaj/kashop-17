import { Box, Button, Divider, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

export default function CartSummary({ total }) {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ p: 3 }}>
        Order Summary
      </Typography>

      <Divider />

      <Box></Box>

      <Typography>Total Price: ${total}</Typography>

      <Button
        onClick={() => navigate("/checkout")}
        variant="contained"
        fullWidth
      >
        Checkout
      </Button>

      <Button onClick={() => navigate("/")}>
        Shopping
      </Button>
    </Paper>
  );
}