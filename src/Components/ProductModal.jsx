import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function ProductModal({ open, price, handleClose, category, image }) {
  const updateCart = useStoreActions(actions => actions.updateCart);
  const cart = useStoreState(state => state.cart);

  const add_to_cart = () => {
    const newCart = [...cart];
    newCart.push({
      price,
      image
    })
    updateCart(newCart);
    handleClose();
  }

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>{category}</DialogTitle>
      <DialogContent>
          <Box
            sx={{
                display: 'flex',
            }}  
        >
            <Box>
                <img height="400" src={image} />
            </Box>
          </Box>
        <DialogContentText>
            <Typography variant="h2">price : <b>{price}</b></Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant='contained' onClick={() => {add_to_cart();}}>Add To Cart</Button>
      </DialogActions>
    </Dialog>
  );
}
