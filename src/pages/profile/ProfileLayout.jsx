import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import { Link, Outlet } from "react-router";

function ProfileLayout() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        My Profile
      </Typography>

      <Grid container spacing={3} direction="row-reverse">

        {/* Sidebar */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Paper sx={{ p: 2, borderRadius: 3 }}>
            <Typography fontWeight="bold" mb={2}>
              Account Menu
            </Typography>

            <Button
              component={Link}
              to="/profile"
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 1 }}
            >
              My Profile
            </Button>

            <Button
              component={Link}
              to="/profile/order"
              fullWidth
              sx={{ justifyContent: "flex-start" }}
            >
              My Orders
            </Button>
          </Paper>
        </Grid>

        {/* Content */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Paper sx={{ p: 3, borderRadius: 3, minHeight: 350 }}>
            <Outlet />
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

export default ProfileLayout;