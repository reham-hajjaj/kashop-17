import {
  Typography,
  Container,
  Box,
  Alert,
  CircularProgress,
  MenuItem,
} from "@mui/material";

import { useState } from "react";
import { UseCategories } from "../../hooks/UseCategories";
import CategoryItem from "./CategoriesItem";
function Categories() {
  const { data, isLoading, isError, error } = UseCategories();
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <Alert severity="error">{error.message}</Alert>;
  }
  console.log(data);
    return (
  <Container sx={{ mt: 4, mb: 4 }}>
    <Typography variant="h4" sx={{ mb: 3 }}>
      Categories
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