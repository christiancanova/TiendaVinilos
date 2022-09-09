import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';




export default function ItemCount({quantityToAdd, setquantityToAdd, stock, initial}) {
    const [counter, setCounter] = useState((initial));
    const [counterStock, setCounterStock] = useState(stock);
   
    //increase counter
    const increase = () => {
      if(counter<counterStock)
      { setCounter(count => count + 1)}
      
         
    };
   
    //decrease counter
    const decrease = () => {
      if(counter>1)
      setCounter(count => count - 1);
    };

    
   
    const OnAdd = () => {
      
      if(counterStock>0 && counterStock>=counter) 
      {
      setCounterStock(count => count - (counter));
      
      setquantityToAdd(quantityToAdd+counter)
        
      };
      
      
    };

       
    return (
            <div>
                <div><p>Stock Disponible: {counterStock} </p></div>
                <div><Button variant="secondary" onClick={decrease}>-</Button>
                <span className="counter__output">{counter}</span>
                <Button variant="secondary" onClick={increase}>+</Button></div>
                <div><p></p></div>
                <div><Button variant="btn btn-outline-success" onClick={OnAdd}>Agregar al Carrito</Button></div>
            </div>
          );
}
        
       


