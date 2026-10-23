import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function CategoryItem({
  categories = [],
  value,
  onChange,
  label = "Category",
  width = 220,
}) {
  return (
    <FormControl size="small" sx={{ width }}>
      <InputLabel id="category-label">
        {label}
      </InputLabel>

      <Select
        labelId="category-label"
        value={value}
        label={label}
        onChange={onChange}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            value={category.id}
          >
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CategoryItem;
