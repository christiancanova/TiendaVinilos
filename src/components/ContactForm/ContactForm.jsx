import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ContactForm = () => {
   
    const { submitHandler, changeHandler, id2, form } = useContext(CartContext);

    return (
        <div>
            {typeof id2 !== 'undefined' ? (

                
                <div>
                    <Alert variant="success">
                        <Alert.Heading>Felicitaciones {form.name}! Haz realizado la compra con exito</Alert.Heading>
                        <p>
                            Tu orden de pedido es {id2}
                        </p>
                        <hr />
                        <p className="mb-0">
                            A la brevedad recibiramas un mensaje para coordinar la entrega del producto
                        </p>
                        

                    </Alert>
                </div>
            ) : (
                <Form id="form" onSubmit={submitHandler}>

                    <Form.Label>Completa tus datos para finalizar la compra</Form.Label>

                    <label htmlFor="name">Nombre</label>
                    <Form.Control
                        name="name"
                        id="name"
                        onChange={changeHandler}
                        value={form.name}
                    />

                    <label htmlFor="telefono">Teléfono</label>
                    <Form.Control
                        name="telefono"
                        id="telefono"
                        onChange={changeHandler}
                        value={form.telefono}
                    />


                    <label htmlFor="email">Email</label>
                    <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        onChange={changeHandler}
                        value={form.email}
                    />


                    <label htmlFor="message">Mensaje</label>
                    <Form.Control as="textarea" rows={3}
                        name="message"
                        id="message"
                        onChange={changeHandler}
                        value={form.message}
                    />

                    <Button variant="outline-dark" type="submit">Finalizar</Button>
                </Form>
            )}
        </div>
    );
};

export default ContactForm;
