import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from '../Item/Item';



function ItemList({ listado }) {

    return (
        listado.map((producto) => {
            return (
                
                <Item key={producto.id} producto={producto} />
            )
        }
        )
    )
}


export default ItemList;