import React from "react";
import useProfile from "../../hooks/useProfile";

import {
  Box,
  CircularProgress,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

function ProfileInfo() {
  const { data, isLoading, isError, error } = useProfile();

  if (isLoading) return <CircularProgress />;

  if (isError) {
    return <Alert severity="error">{error?.message}</Alert>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 4,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ textAlign: "center", mb: 3 }}
        >
          My Profile
        </Typography>

        <Box>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
          
            InputProps={{ readOnly: true }}
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
         
            InputProps={{ readOnly: true }}
          />

          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
          
            InputProps={{ readOnly: true }}
          />

          <TextField
            label="City"
            fullWidth
            margin="normal"
           
          
          />
        </Box>
      </Box>
    </Container>
  );
}

export default ProfileInfo;