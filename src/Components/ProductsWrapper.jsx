import React from 'react';
import { useStoreState } from 'easy-peasy';
import {
    Box, Typography,
} from '@mui/material';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';

const ProductsWrapper = () => {
    // const currentCategory = useStoreState(state => state.currentCategory);
    const [products, setProducts] = React.useState([]);
    const location = useLocation();
    
    const [currentCategory, setCurrentCategory] = React.useState(location.pathname.split('/')[2]);

    const get_products_from_category = async (categoryName) => {
        console.log(categoryName)
        const res = await fetch(`http://localhost:5000/api/products/?category=${categoryName}`, { method: 'GET' });
        const data = await res.json()
        setProducts([...data.products])
    }

    React.useEffect(() => {
        // setCurrentCategory(location.pathname.split('/')[2])
        (async () => {
            await get_products_from_category(location.pathname.split('/')[2]);
        })()
    }, [location]);

    React.useEffect(() => {
        setCurrentCategory(location.pathname.split('/')[2])
    }, [location])

    return (
        <Box
            sx={{

            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Typography variant="h3">{currentCategory}</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    flexGrow: 1,
                }}
            >
                {products.map(val => (<Box
                    sx={{

                    }}
                    key={val._id}
                ><ProductCard clickable={true} price={val.price} id={val._id} image={val.image}></ProductCard></Box>
                )
                )}
            </Box>
        </Box>
    )
}

export default ProductsWrapper;