import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const busqueda = items.find(item => item.id === id);
        return busqueda
    }


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
            setItems([...items, { id: item.id, name: item.title, price: item.price, qty: qty }])
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))

    }

    const clear = () => {
        setItems([])

    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}