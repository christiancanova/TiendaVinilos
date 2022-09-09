import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function ItemDetail({ item }) {

const [quantityToAdd, setquantityToAdd] = useState(0);   
    
        

    return (
        <Card border="secondary" id="card2" style={{ width: '45rem', }}>
          <Card.Img id="card-img" variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            Precio: ${item.price}
            </Card.Text>
            <ItemCount quantityToAdd={quantityToAdd} setquantityToAdd={setquantityToAdd} stock={10} initial={1}/>
            <Card.Text>Tienes {quantityToAdd} productos en el carrito</Card.Text>
            <div><Button as={Link} to={`/cart`} variant="btn btn-danger" >Terminar Compra</Button></div>
          </Card.Body>
        </Card>
        
        
        
      );
}


export default ItemDetail;