import Item from '../Item/Item';
import { productos } from '../../productos';
import './ItemListContainer.css';
import React, { useEffect, useState } from 'react'; 
import Loader from '../Loader/loader';
import Carousel from '../Carousel/carousel';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemListContainer({greetings}) {

    const[todosLosProductos, setTodosLosProductos] = useState([]);
    const[misProductos, setMisProductos] = useState([]);
    const[loading, setLoading] = useState(true);
    const[detalleFiltrado, setDetalleFiltrado] = useState(false);

    const usarFiltro = (filtro, id) => {
        switch (filtro) {
            case "Mostrar todo":
                setDetalleFiltrado (false);
                setMisProductos(todosLosProductos);
                break;
            case "Washis":
                setDetalleFiltrado (false);
                setMisProductos(todosLosProductos.filter(el => el.id === "washi"));
                break;
            case "Cintas":
                setDetalleFiltrado (false);
                setMisProductos(todosLosProductos.filter(el => el.id === "cinta"));
                break;
            case "Hojas Decorativas":
                setDetalleFiltrado (false);
                setMisProductos(todosLosProductos.filter(el => el.id === "papelDeco"));
                break;
            case "Cuadernos":
                setDetalleFiltrado (false);
                setMisProductos(todosLosProductos.filter(el => el.id === "cuadernillo"));
                break;
            case "Detalle":
                setDetalleFiltrado (true);
                setMisProductos(todosLosProductos.filter(el => el.id === id));
                break;
        };
    };

    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);  
        }, 2000);
    });

    useEffect(() => {
        fetchData().then(response => {
            setTodosLosProductos(response);
            setMisProductos(response);
            setLoading(false);
        })
        .catch(err => console.error(err));  
    },[]);

    return (
        <>
            <Carousel/>
            <h1>{greetings}</h1>
            <hr />
            {
            ! detalleFiltrado &&
            <div className="filter-container">
                <button className="filtros-btn" onClick={() => usarFiltro("Mostrar todo")}>Mostrar todo</button>
                <button className="filtros-btn" onClick={() => usarFiltro("Washis")}>Washis</button>
                <button className="filtros-btn" onClick={() => usarFiltro("Cintas")}>Cintas</button>
                <button className="filtros-btn" onClick={() => usarFiltro("Hojas Decorativas")}>Hojas Decorativas</button>
                <button className="filtros-btn" onClick={() => usarFiltro("Cuadernos")}>Cuadernos</button>
            </div>
            }
            <div className="card-container">
                {
                    loading ? <Loader/> :
                        detalleFiltrado ? <ItemDetail item={misProductos[0]} usarFiltro={usarFiltro}/> :
                        misProductos.map ((el, index) => {
                            return (
                            <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} usarFiltro={usarFiltro}/>
                            );
                        })
                }
            </div>
            </>
    );
};

export default ItemListContainer;