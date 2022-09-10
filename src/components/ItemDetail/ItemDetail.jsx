import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import GrowExample from '../spinner/spinner';



function ItemDetail({ item }) {

  const [quantityToAdd, setquantityToAdd] = useState(0);
  const [terminarCompra, setTerminarCompra] = useState(false);
  const [loading, setLoading] = useState(true);

  const OnAdd = (qty) => {
    setTerminarCompra(true);
    console.log(qty);
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

}, )


  return (


    <Card border="secondary" id="card2" style={{ width: '45rem', }}>
      <Card.Img id="card-img" variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Precio: ${item.price}
        </Card.Text>

        {terminarCompra ?
          (loading ? <div className="spinner">  <GrowExample /> </div> : (<div><Card.Text>Agregaste {quantityToAdd} productos al carrito</Card.Text> <Button as={Link} to={`/cart`} variant="btn btn-danger" >Terminar Compra</Button></div>)) :
          (<ItemCount OnAdd={OnAdd} quantityToAdd={quantityToAdd} setquantityToAdd={setquantityToAdd} stock={10} initial={1} />)
        }

      </Card.Body>
    </Card>



  );
}


export default ItemDetail;