import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

function ProductCard({ product }) {
  const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3 }}>
      <CardActionArea component={Link} to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: "contain", p: 2 }}
        />

        <CardContent>
          <Typography variant="h6" component="h3">
            {product.name}
          </Typography>

          <Rating value={product.Rating} readOnly />

          <Typography variant="h6" color="primary">
            ${product.price}
          </Typography>

          <Typography variant="body2" color="success.main">
            {t("products.inStock")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;