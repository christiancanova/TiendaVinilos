import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from '../Item/Item';



function ItemList({ listado }) {


    const productos = (listado)
    console.log(productos)

    return (
        productos.map((producto) => {
            return (
                
                <Item producto={producto} />
            )
        }
        )
    )
}


export default ItemList;