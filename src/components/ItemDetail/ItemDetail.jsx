import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';



function ItemDetail({ item }) {

    return (
        <Card border="secondary" id="card2" style={{ width: '45rem', }}>
          <Card.Img id="card-img" variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            Precio: ${item.price}
            </Card.Text>
            <ItemCount stock={10} initial={1}/>
          </Card.Body>
        </Card>
        
        
        
      );
}


export default ItemDetail;