import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Cart = () => {

  const { items, removeItem, clear, total, } = useContext(CartContext);

  let controlCantidad = items.length === 0

  
 
  return (<div className="App-cart">
    
    
    {controlCantidad ?
      <div id="cart"> No hay productos en tu carrito de compras. </div>
      :
      <div id="cart">
        
        {items.map(items =>
          <div key={items.id} >

            <Card id="cart" border="Dark" >
              <Card.Header as="h5">{items.name}</Card.Header>
              <Card.Body>
                <Card.Text>Precio del producto: ${items.price}</Card.Text>
                <Card.Text>Cantidad: {items.qty}</Card.Text>
                <Card.Title>Precio total: ${items.price*items.qty}</Card.Title>
                <Button onClick={() => removeItem(items.id)} variant="secondary" size="sm">Quitar producto</Button>
              </Card.Body>
            </Card>
          </div>
        )
        }
        <Card id="cart" border="light">
        <Card.Text><Button onClick={() => clear()} variant="secondary" size="sm">Limpiar mi carrito</Button></Card.Text>
        
        <Card.Text><Button as={Link} to={`/form`} variant="danger">Pagar: $ {total}</Button></Card.Text>
        </Card>
      </div>}
    <Button as={Link} to={"/"} variant="outline-success">Seguir comprando</Button>

  </div>
  )
}

export default Cart;