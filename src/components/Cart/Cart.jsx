import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

const Cart = () => {
  const { items, removeItem, clear, total, } = useContext(CartContext);
  let controlCantidad = items.length === 0
  return (
    <div className="App-cart">
      {controlCantidad ?
        <div id="cart" className="font-mono"> No hay productos en tu carrito de compras. </div>
        :
        <div id="cart">
          {items.map(items =>
            <div className="drop-shadow-2xl" key={items.id} >
              <Card id="cart" border="Dark" style={{ width: '50rem', }} >
                <Card.Header id="cartimage" as="h4"><p className="font-mono text-3xl font-semibold text-slate-700 ">{items.name} - {items.description}</p>
                  <Card.Img src={items.image} style={{ width: '7rem', }} />
                  <CloseButton onClick={() => removeItem(items.id)} />
                </Card.Header>
                <Card.Body>
                  <Card.Text as="h5"><p className="font-mono text-zinc-500 ">Precio del producto: ${items.price} - Cantidad: {items.qty} - Precio total: ${items.price * items.qty}</p></Card.Text>
                  <Card.Title></Card.Title>
                </Card.Body>
              </Card>
            </div>
          )
          }
          <div className="font-mono"><Card.Text><Button onClick={() => clear()} variant="secondary" >Limpiar mi carrito</Button></Card.Text></div>
          <br />
          <div className="font-mono"><Card.Text><Button as={Link} to={`/form`} variant="danger">Pagar: $ {total}</Button></Card.Text></div>
        </div>}
      <div className="font-mono"><Button as={Link} to={"/"} variant="outline-success">Seguir comprando</Button></div>
    </div>
  )
}

export default Cart;