import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import GrowExample from '../spinner/spinner';
import { CartContext } from '../../context/CartContext';



function ItemDetail({ item }) {

  const [quantityToAdd, setquantityToAdd] = useState(0);
  const [terminarCompra, setTerminarCompra] = useState(false);
  const [loading, setLoading] = useState(true);
  const { addItem, setId } = useContext(CartContext)


  const OnAdd = (qty) => {
    setId()
    setTerminarCompra(true);
    addItem(item, qty);
  };

  useEffect(() => {
    const promiseObject = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    promiseObject.then(values => {
      setLoading(false);
    });
  },)

  let cantidad = quantityToAdd === 1
  return (
    <Card border="secondary" id="card2" style={{ width: '50rem', }} className="drop-shadow-2xl">
      <Card.Img id="card-img" variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="font-mono text-2xl font-semibold text-slate-700 ">{item.title}</Card.Title>
        <Card.Text className="font-mono text-lg text-zinc-500">{item.description}</Card.Text>
        <Card.Text className="font-mono text-lg text-zinc-500">Precio: ${item.price}</Card.Text>
        {terminarCompra ?
          (loading ? <div className="spinner">  <GrowExample /> </div> :
            cantidad ? <div className="font-mono"><Card.Text className="font-mono text-lg text-zinc-500" >Agregaste {quantityToAdd} producto al carrito</Card.Text> <Button as={Link} to={`/cart`} variant="btn btn-danger" >Terminar Compra</Button></div> : <div className="font-mono" ><Card.Text className="font-mono text-lg text-zinc-500" >Agregaste {quantityToAdd} productos al carrito</Card.Text> <Button as={Link} to={`/cart`} variant="btn btn-danger" > Terminar Compra</Button></div>) :
          (<ItemCount OnAdd={OnAdd} quantityToAdd={quantityToAdd} setquantityToAdd={setquantityToAdd} stock={item.stock} initial={1} />)
        }
      </Card.Body>
    </Card>
  );
}


export default ItemDetail;