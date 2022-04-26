import React from 'react';
import logo from './logo.svg';
import {
  Box,
} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useStoreState, useStoreActions } from 'easy-peasy';

import HomePage from './Pages/Home';
import CategoryPage from './Pages/Category';
import CartPage from './Pages/Cart';

import NavBar from './Components/NavBar';

function App() {

  return (
    <Box >
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/category'>
          <Route path='*' element={<CategoryPage />}></Route>
        </Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
