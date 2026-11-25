import {
  Alert,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import { UseProducts } from "../../hooks/UseProducts";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation();

  const { data, isPending, isError } = UseProducts();

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        {t("home.loadProductsError")}
      </Alert>
    );
  }

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 4 }}
      >
        {t("home.products")}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
          },
        }}
      >
        {data?.map((product) => (
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