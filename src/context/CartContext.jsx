import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const busqueda = items.find(item => item.id === id);
        return busqueda
    }

  
    const total = items.reduce((prev, act) => prev +  act.qty * act.price, 0)
            

    const addItem = (item, qty) => {
        isInCart(item.id)
            ?
            setItems(items.map((producto) => {
                if (producto.id === item.id) {
                    producto.qty = producto.qty + qty;
                }
                return producto
            }))
            :
            setItems([...items, { id: item.id, name: item.title,image: item.image, description: item.description, price: item.price, qty: qty }])
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))

    }

    const clear = () => {
        setItems([])

    }

    const [id2, setId] = useState();
 
    const [form, setForm] = useState({
        name: '',
        telefono: '',
        email: '',
        message: '',
    });

    const changeHandler = (event) => {
        const newForm = { ...form, [event.target.name]: event.target.value };
        setForm(newForm);
    };

    const fecha = new Date()

    const submitHandler = (event) => {
        event.preventDefault();

        const db = getFirestore();
        const contactFormCollection = collection(db, 'orders');
        addDoc(contactFormCollection, {fecha, buyer:form, items:items , total: total}).then((snapshot) => setId(snapshot.id));
        setItems([])
       

        
    };

    

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clear, total, submitHandler, changeHandler, id2, form, setId   }}>
            {children}
        </CartContext.Provider>
    )
}