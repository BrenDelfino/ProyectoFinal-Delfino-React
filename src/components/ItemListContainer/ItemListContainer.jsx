import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/carousel';
import { db } from '../../firebaseConfig';
import { collection, addDoc, query, where, getDocs} from "firebase/firestore";


function ItemListContainer() {

    const [todosLosProductos, setTodosLosProductos] = useState([]); 
    const [misProductos, setMisProductos] = useState([]); 

    const { categoria } = useParams();

    useEffect(() => {
        let productsCollection = collection(db, "products");
        let consulta = productsCollection;
        if (categoria) {
            let productsCollectionFiltered = query(
            productsCollection,
            where("categoria", "==", categoria)
        );
        consulta = productsCollectionFiltered;
        }
    
        getDocs(consulta).then((res) => {
        let nuevoArray = res.docs.map((elemento) => {
            return { id: elemento.id, ...elemento.data() };
        });
        setMisProductos(nuevoArray);
        });
    }, [categoria]);

    return (
        <>
            <Carousel/>
            <div className="card-container">
                {
                        misProductos.map((el, index) => {
                            return (
                                <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} />
                            );
                        })
                }
            </div>
        </>
    );
};

export default ItemListContainer;