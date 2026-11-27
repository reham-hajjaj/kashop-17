import useProfile from "../../hooks/useProfile";

import {
  Alert,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function ProfileOrders() {
  const { data, isLoading, isError, error } = useProfile();

  const orders = data?.orders ?? [];

  if (isLoading) return <CircularProgress />;

  if (isError) {
    return <Alert severity="error">{error?.message}</Alert>;
  }

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          My Orders
        </Typography>

        <TableContainer>
          <Table>

            {/* Table Header */}
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Payment Status</TableCell>
                 <TableCell>AmountPaid</TableCell>
                <TableCell>Status</TableCell>

              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>

                    <TableCell>
                      <Chip
                        label={order.paymentStatus ?? "Not specified"}
                        size="small"
                        variant="outlined"
                      />
                    </TableCell>
<TableCell>
                      <Chip
                        label={order.amountPaid ?? "Not specified"}
                        size="small"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={order.status ?? "Unknown"}
                        color="success"
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No Orders Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>

          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default ProfileOrders;