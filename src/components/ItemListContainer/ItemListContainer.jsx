import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import GrowExample from '../spinner/spinner';



function ItemListContainer() {


  //const [carrito, setCarrito ] = useState([]) 
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);

  const buscarProductos = async () => {

    const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=vinilos+musica")
    const data = await response.json()
    setProductos(data.results);
  }

  useEffect(() => {

    const promiseObject = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    promiseObject.then(values => {
      buscarProductos()
      setLoading(false);
      clearTimeout(promiseObject);
    });


  }, [])

  if (loading) {
    return <div className="spinner">  <GrowExample  /> </div> ;
  }

  return <ItemList listado={productos} />;
};





export default ItemListContainer;
