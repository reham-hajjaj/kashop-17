import { Box, Paper, Typography, IconButton } from '@mui/material';
import React from 'react';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useRemoveItem from '../../hooks/useRemoveItem';
import DeleteIcon from '@mui/icons-material/Delete';
function CartItem({ item }) {

  const { mutate: updateCartItem, isPending } = useUpdateCartItem();
const {mutate: removeItem, isPending: isRemoving}= useRemoveItem();

const handleRemove = () => {
  removeItem(item.productId);
};
  const handleIncrease = () => {
  updateCartItem({
    ProductId: item.productId,
    count: item.count + 1,
  });
};

const handleDecrease = () => {
  if (item.count > 1) {
    updateCartItem({
      ProductId: item.productId,
      count: item.count - 1,
    });
  }
};

  return (
    <Paper
      sx={{
        p: 2,
        mb: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: 1,
        borderColor: 'grey.400',
        borderRadius: 2,
      }}
    >
      <Box>
        <Typography fontWeight="bold">
          {item.productName}
        </Typography>

        <Typography color="text.secondary">
          ${item.price} each
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>

        <IconButton
          onClick={handleDecrease}
          disabled={isPending || item.count <= 1}
        >
          <RemoveIcon fontSize="small" />
        </IconButton>

        <Typography>
          {item.count}
        </Typography>

        <IconButton
          onClick={handleIncrease}
          disabled={isPending}
        >
          <AddIcon fontSize="small" />
        </IconButton>

      </Box>

      <Typography fontWeight="bold">
        Total: ${item.totalPrice}
      </Typography>
<IconButton
  onClick={handleRemove}
  disabled={isRemoving}
  color="error"
>
  <DeleteIcon />
</IconButton>
    </Paper>
  );
}

export default CartItem;