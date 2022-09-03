import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';



export default function Item({producto}) {
          
    return (
            <Card id="card" style={{ width: '21rem', }}>
              <Card.Img variant="top" src={producto.thumbnail} />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                Precio: ${producto.price}
                </Card.Text>
                <ItemCount stock={10} initial={1}/>
              </Card.Body>
            </Card>
          );
}
        
       


