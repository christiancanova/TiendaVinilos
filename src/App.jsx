import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




const App = () => {


  return (
    <header className="App">
      <NavScrollExample />
      <div className="App-header">
      <ItemListContainer  />
      
      </div>
    </header>
  );
}

export default App;
