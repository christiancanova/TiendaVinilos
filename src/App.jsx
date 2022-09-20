import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './components/Navbar/NavBar'
import ItemDetailContainer from './components/ItemDetailContanier/ItemDetailContanier';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';




const App = () => {

  return (

    <>
      <CartProvider>
        <BrowserRouter>
          <NavScrollExample className="App" />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/producto/:idproducto" element={<ItemListContainer />} />
            <Route exact path="/categoria/:idcategoria" element={<ItemListContainer />} />
            <Route exact path="/detalle/:idproducto" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </>
  )
}

export default App;
