import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import GrowExample from '../spinner/spinner';
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {


  //const [carrito, setCarrito ] = useState([]) 
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const {idproducto} = useParams()
  

  const getItem = async () => {

    const response = await fetch(`https://api.mercadolibre.com/items/${idproducto}`)
    const data = await response.json()
    setProductos(data);
  }

  useEffect(() => {

    const promiseObject = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    promiseObject.then(values => {
      getItem()
      setLoading(false);
      clearTimeout(promiseObject);
    });


  }, )

  return (

    <div className="App-header"> {loading ? <div className="spinner">  <GrowExample /> </div> : <ItemDetail key={productos.id} item={productos} />} </div>

  )


};





export default ItemDetailContainer;

