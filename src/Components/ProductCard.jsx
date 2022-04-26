
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductModal from './ProductModal';
import { CardActionArea } from '@mui/material';
import {useLocation} from 'react-router-dom';

const ProductCard = ({ price, image, clickable }) => {
    const location = useLocation();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (clickable)
            setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Card onClick={handleClickOpen} sx={{ maxWidth: 345}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Price : {price}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                        <Button size="small">Add To Cart</Button>
                    </CardActions> */}
                </CardActionArea>
            </Card>
            <ProductModal handleClose={() => handleClose()} price={price} image={image} open={open} category={location.pathname.split('/')[2]} />
        </React.Fragment>
    )
}

export default ProductCard;