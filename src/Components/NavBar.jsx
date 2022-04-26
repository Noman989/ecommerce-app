import React from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Button,
    InputBase,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import {
    useNavigate
} from 'react-router-dom';

const NewCategoryInputField = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavBar = () => {

    const [categories, setCategories] = React.useState([{ name: 'Sports' }]);
    const [categoryName, setCategoryName] = React.useState('');

    const nav = useNavigate();

    const to_home = () => {
        nav('/')
    }

    const to_category = (category) => {
        nav(`/category/${category}`);
    }

    const to_cart = () => {
        nav('/cart')
    }

    const get_categories = async () => {
        const res = await fetch('http://localhost:5000/api/categories');
        let json = await res.json();
        console.log(json);
        setCategories([...json.categories]);
    }

    const add_new_category = async () => {
        if (categoryName.length > 0) {
            const res = await fetch('http://localhost:5000/api/categories', {
                headers: {'Content-Type': "application/json"},
                method: "POST",
                body: JSON.stringify({name: categoryName}),
            });
            if (res.status !== 200) {
                alert(`${res.status} : ${res.statusText}`);
            } else {
                const json = await res.json();
                await get_categories();
                console.log(json);
            }
        }
    }

    React.useEffect(() => {
        (async () => {
            console.log('getting data');
            await get_categories();
            console.log('got data');
        })()
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button onClick={() => { to_home() }} color="inherit" sx={{ flexGrow: 1 }}>
                            E-Commerce App
                        </Button>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box>
                                {categories.map(val => <p key={val._id} style={{ display: 'inline-block' }}><Button color="inherit" onClick={() => { to_category(val.name) }}>{val.name}</Button></p>)}
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2
                                }}
                            >
                                <NewCategoryInputField>
                                    <StyledInputBase
                                        onChange={(e) => { setCategoryName(e.currentTarget.value) }}
                                        placeholder="Category"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </NewCategoryInputField>
                                <Button onClick={() => {add_new_category()}} color="secondary" variant="contained">Add Category</Button>
                                <Button color="inherit" onClick={() => {to_cart();}}>Cart</Button>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;