import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddProductForm({ open, handleClose, category }) {

  const [imageURL, setImageURL] = React.useState('');
  const [price, setPrice] = React.useState(0);

  const add_new_product = async () => {
    const res = await fetch(
      'http://localhost:5000/api/product/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: category,
          product: {
            image: imageURL,
            price: price
          }
        })
      }
    );

    if(res.status !== 200) {
      alert(`${res.status} : ${res.statusText}`);
    } else {
      const json = await res.json();
      alert(json.status);
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Category: {category}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="image"
          label="Image URL"
          type="text"
          fullWidth
          variant="standard"
          value={imageURL}
          onChange={(e) => setImageURL(e.currentTarget.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          label="Price"
          type="number"
          fullWidth
          variant="standard"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => {
          (async () => {
            add_new_product();
            handleClose();
            setPrice(0);
            setImageURL('');
          })()
        }}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
