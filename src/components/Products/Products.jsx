import {
  Alert,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import { UseProducts } from "../../hooks/UseProducts";
import ProductCard from "./ProductCard";

function Products() {
  const { data, isPending, isError, error } = UseProducts();

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        {error?.message || "Something went wrong"}
      </Alert>
    );
  }

  console.log(data);

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 4 }}
      >
        Products
      </Typography>
      <Box sx={{display:'grid',gap:2,gridTemplateColumns:{xs:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repaet(4,1fr)",}}}>
         {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
      </Box>

     
    </Box>
  );
}

export default Products;