import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import GrowExample from '../spinner/spinner';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';



function ItemDetailContainer() {


  //const [carrito, setCarrito ] = useState([]) 
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const { idproducto } = useParams()


  useEffect(() => {
    const promiseObject = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        const db = getFirestore();
        const itemRef = doc(db, "Items", idproducto);
        getDoc(itemRef).then((snapshot) => {
          const newProduct = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setProductos(newProduct);
        });
      }, 800);
    });
    promiseObject.then(values => {
      setLoading(false);
      clearTimeout(promiseObject);
    });


  }, [idproducto])

  return (

    <div className="App-header"> {loading ? <div className="spinner">  <GrowExample /> </div> : <ItemDetail key={productos.id} item={productos} />} </div>

  )


};





export default ItemDetailContainer;

