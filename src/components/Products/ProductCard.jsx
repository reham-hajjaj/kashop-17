import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3 }}>
      <CardActionArea>
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

          <Typography variant="h6" color="primary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;