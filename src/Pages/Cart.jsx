import React from 'react';
import { useStoreState } from 'easy-peasy';
import {
    Box, Typography
} from '@mui/material';
import ProductCard from '../Components/ProductCard';

const CartPage = () => {
    const cart = useStoreState(state => state.cart);

    return (
        <Box sx={{pl: 10}}>
            <Typography sx={{mt: 10}} variant='h1'>Cart</Typography>
            {cart.map(item => (
                <div style={{margin: '10px 10px 10px 10px'}}>
                    <ProductCard price={item.price} image={item.image}></ProductCard>
                </div>
            ))}
        </Box>
    );
}

export default CartPage;