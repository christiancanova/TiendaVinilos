import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './components/Navbar/NavBar'
import ItemDetailContainer from './components/ItemDetailContanier/ItemDetailContanier';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




const App = () => {

  return (

    <>
      <BrowserRouter>
      <NavScrollExample className="App" />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/producto/:idproducto" element={<ItemListContainer />} />
          <Route exact path="/categoria/:idcategoria" element={<ItemListContainer />} />
          <Route exact path="/detalle/:idproducto" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
