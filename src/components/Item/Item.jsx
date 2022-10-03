import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Item({ producto }) {


  return (
    <Card as={Link} to={`/detalle/${producto.id}`} id="card" style={{ width: '19rem', }} className="hover:scale-105 drop-shadow-md hover:drop-shadow-2xl">
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Text className="font-mono text-2xl font-semibold text-zinc-500">
          {producto.description}</Card.Text>
        <Card.Text className="font-mono text-3xl font-semibold text-slate-700">{producto.title}</Card.Text>
        <Card.Text className="font-mono text-lg text-zinc-500">${producto.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}




