import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './components/Navbar/NavBar'
import ItemDetailContainer from './components/ItemDetailContanier/ItemDetailContanier';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';




const App = () => {

//<ItemListContainer  />
  return (
    <header className="App">
      <NavScrollExample />
      <div className="App-header">
      <ItemDetailContainer />
      </div>
    </header>
  );
}

export default App;
