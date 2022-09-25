import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function Item({producto}) {

          
    return (
            <Card id="card" style={{ width: '21rem', }}>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                <Link to={`/detalle/${producto.id}`}><Button variant="secondary">Ver detalle de producto</Button></Link>
                </Card.Text>
              </Card.Body>
            </Card>
          );
}
        
  


