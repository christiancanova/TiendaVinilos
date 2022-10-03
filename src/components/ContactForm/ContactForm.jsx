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
                        <Alert.Heading>Felicitaciones {form.name}! Haz realizado la compra con éxito</Alert.Heading>
                        <p>
                            Tu orden de pedido es {id2}
                        </p>
                        <hr />
                        <p className="mb-0">
                            A la brevedad recibirás un mensaje para coordinar la entrega del producto.
                        </p>
                    </Alert>
                </div>
            ) : (
                <Form id="form" onSubmit={submitHandler}>
                    <Form.Label><h4>Completa tus datos para finalizar la compra:</h4></Form.Label>
                    <label htmlFor="name">Nombre y Apellido:</label>
                    <Form.Control
                        name="name"
                        id="name"
                        onChange={changeHandler}
                        value={form.name}
                        required
                    />
                    <label htmlFor="telefono">Teléfono:</label>
                    <Form.Control
                        name="telefono"
                        id="telefono"
                        onChange={changeHandler}
                        value={form.telefono}
                        required
                    />
                    <label htmlFor="email">Correo Electrónico:</label>
                    <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        onChange={changeHandler}
                        value={form.email}
                        required
                    />
                    <label htmlFor="message">Comentarios:</label>
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
