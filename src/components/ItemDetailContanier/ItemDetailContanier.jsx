import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import GrowExample from '../spinner/spinner';



function ItemDetailContainer() {


  //const [carrito, setCarrito ] = useState([]) 
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);

  const getItem = async () => {

    const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=vinilos+musica")
    const data = await response.json()
    setProductos(data.results[17]);
  }

  useEffect(() => {

    const promiseObject = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    promiseObject.then(values => {
      getItem()
      setLoading(false);
      clearTimeout(promiseObject);
    });


  }, [])

  if (loading) {
    return <div className="spinner">  <GrowExample  /> </div> ;
  }

  return <ItemDetail key={productos.id} item={productos} />;
};





export default ItemDetailContainer;

