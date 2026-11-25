import {
  Typography,
  Container,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { UseCategories } from "../../hooks/UseCategories";
import CategoryItem from "./CategoriesItem";

function Categories() {
  const { t } = useTranslation();

  const { data, isLoading, isError, error } = UseCategories();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (isLoading) {
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
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {t("home.categories")}
      </Typography>

      <Box sx={{ p: 3 }}>
        <CategoryItem
          categories={data ?? []}
          value={selectedCategory}
          onChange={handleChange}
        />
      </Box>
    </Container>
  );
}

export default Categories;