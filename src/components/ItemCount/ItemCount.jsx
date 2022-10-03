import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

export default function ItemCount({ OnAdd, quantityToAdd, setquantityToAdd, stock, initial }) {
  const [counter, setCounter] = useState((initial));
  const [counterStock, setCounterStock] = useState(stock);

  //increase counter
  const increase = () => {
    if (counter < counterStock) { setCounter(count => count + 1) }
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1)
      setCounter(count => count - 1);
  };

  const calculoCantidad = () => {

    if (counterStock > 0 && counterStock >= counter) {
      setCounterStock(count => count - (counter));
      setquantityToAdd(counter)
      OnAdd(counter)
    };
  };


  return (
    <div>
      <div><p className="font-mono text-lg text-zinc-500">Stock Disponible: {counterStock} </p></div>
      <div><Button variant="secondary" onClick={decrease}>-</Button>
        <span className="counter__output">{counter}</span>
        <Button variant="secondary" onClick={increase}>+</Button></div>
      <div><p></p></div>
      <div className="font-mono"><Button variant="outline-dark" onClick={calculoCantidad}>Agregar al carrito</Button></div>
    </div>
  );
}




