import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import GrowExample from '../spinner/spinner';
import { useParams } from 'react-router-dom';


function ItemListContainer() {


  //const [carrito, setCarrito ] = useState([]) 
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const {idcategoria} = useParams()

  const buscarProductos = async () => {

    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=vinilos+musica+${idcategoria}`)
    const data = await response.json()
    setProductos(data.results);
  }

  useEffect(() => {

    const promiseObject = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    promiseObject.then(values => {
      buscarProductos()
      setLoading(false);
      clearTimeout(promiseObject);
    });


  }, )


  return (

    <div className="App-header"> {loading ? <div className="spinner">  <GrowExample /> </div> : <ItemList listado={productos} />} </div>

  )

};





export default ItemListContainer;

