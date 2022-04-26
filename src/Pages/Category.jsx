import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductsWrapper from '../Components/ProductsWrapper';
import { useLocation } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import { useStoreState } from 'easy-peasy';
import AddProductForm from '../Components/AddProductForm';

const CategoryPage = () => {
    const location = useLocation();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 10,
                mt: 10
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 120,
                    right: 10,
                }}
            >
                <Button onClick={handleClickOpen} variant='contained'>Add Product</Button>
            </Box>
            <ProductsWrapper/>
            <AddProductForm open={open} handleClose={handleClose} category={location.pathname.split('/')[2]} />
        </Box>
    )
}

export default CategoryPage;