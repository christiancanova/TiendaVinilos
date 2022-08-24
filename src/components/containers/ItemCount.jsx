import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "./thriller.jpg";

export default function ItemCount({stock, initial}) {
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
      
        console.log("Agregaste "+counter+" Vinilos")
        
      };
      
      
    };

       
    return (
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Michael Jackson – Thriller</Card.Title>
                <Card.Text>
                Thriller es el sexto álbum de estudio del artista estadounidense Michael Jackson, publicado el 30 de noviembre de 1982 por Epic Records.
                </Card.Text>
                <div><p>Stock Disponible: {counterStock} </p></div>
                <div><Button variant="secondary" onClick={decrease}>-</Button>
                <span className="counter__output">{counter}</span>
                <Button variant="secondary" onClick={increase}>+</Button></div>
                <div><p></p></div>
                <div><Button variant="outline-secondary" onClick={OnAdd}>Agregar al carrito</Button></div>
              </Card.Body>
            </Card>
          );
}
        
       


