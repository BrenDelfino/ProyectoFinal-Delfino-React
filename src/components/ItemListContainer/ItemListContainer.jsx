import Item from '../Item/Item';
import { productos } from '../../productos';
import './ItemListContainer.css';
import React, { useEffect, useState } from 'react'; 
import Loader from '../Loader/loader';
import Carousel from '../Carousel/carousel';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const[todosLosProductos, setTodosLosProductos] = useState([]);
    const[misProductos, setMisProductos] = useState([]);
    const[loading, setLoading] = useState(true);
    const {categoria} = useParams();

    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);  
        }, 2000);
    });

    useEffect(() => {
            fetchData().then(response => {
            if (categoria) {
                const productosFiltrados = response.filter(el => el.categoria === categoria);
                setMisProductos(productosFiltrados);
            } else {
                setMisProductos(response);
            }
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    },[categoria]);

    return (
        <>
            <Carousel/>
            <div className="card-container">
                {
                    loading ? <Loader/> :
                        misProductos.map ((el, index) => {
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