import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './ItemCount';


function ItemListContainer() {
   
    return (
      <ItemCount stock={10} initial={1}/>
    );
  }
  
  export default ItemListContainer;