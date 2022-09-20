import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const { items, removeItem, clear } = useContext(CartContext);
  return (

    <div>
      {items.map(items =>

        <div key={items.id} >
          {items.name} {items.price} {items.qty} <button onClick={() => removeItem(items.id)}>Borrar producto</button>
        </div>
      )
      }
      <button onClick={() => clear()}>Borrar todos los productos</button>
    </div>
  )
}

export default Cart;