import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';



function ItemListContainer() {
  

  //const [carrito, setCarrito ] = useState([]) 
  const [productos, setProductos] = useState([])

  const buscarProductos = async () => {

    const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=vinilos+musica")
    const data = await response.json()
    setProductos(data.results);
  }

  useEffect(() => {

    setTimeout(() => {

      console.log("Actualizando tienda...")
      
    }, 0);

    setTimeout(() => {
      buscarProductos();
    }, 2000);

  }, [])

  console.log(productos);
  return (

    <ItemList listado={productos} />
  )

  

}



export default ItemListContainer;

