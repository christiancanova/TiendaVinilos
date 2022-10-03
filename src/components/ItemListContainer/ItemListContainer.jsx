import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import GrowExample from '../spinner/spinner';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const { idcategoria } = useParams()

  useEffect(() => {

    const promiseObject = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idcategoria === undefined) {
          const db = getFirestore();
          const items = collection(db, "Items");
          getDocs(items).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setProductos(docs);
          })
        }
        else {
          const db = getFirestore();
          const items = collection(db, "Items");
          const q = query(items, where("categoryId", "==", idcategoria))
          getDocs(q).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setProductos(docs);
          })
        }
        resolve();
      }, 800);
    });
    promiseObject.then(values => {
      setLoading(false);
      clearTimeout(promiseObject);
    });
  }, [idcategoria])


  return (
    <div className="App-header"> {loading ? <div className="spinner">  <GrowExample /> </div> : <ItemList listado={productos} />} </div>
  )
};

export default ItemListContainer;

