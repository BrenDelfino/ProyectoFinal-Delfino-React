import Item from '../Item/Item';
import { productos } from '../../productos';
import './ItemListContainer.css';
import React, { useEffect, useState } from 'react'; 
import Loader from '../Loader/loader';

function ItemListContainer({greetings}) {

    const[todosLosProductos, setTodosLosProductos] = useState([]);
    const[misProductos, setMisProductos] = useState([]);
    const[loading, setLoading] = useState(true);
    const[detalleFiltrado, setDetalleFiltrado] = useState(false);

    const usarFiltro = (filtro) => {
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
        }, 3000);
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
            <h1>{greetings}</h1>
            <hr />
            <div className="filter-container">
                <button onClick={() => usarFiltro("Mostrar todo")}>Mostrar todo</button>
                <button onClick={() => usarFiltro("Washis")}>Washis</button>
                <button onClick={() => usarFiltro("Cintas")}>Cintas</button>
                <button onClick={() => usarFiltro("Hojas Decorativas")}>Hojas Decorativas</button>
                <button onClick={() => usarFiltro("Cuadernos")}>Cuadernos</button>
            </div>
            <div className="card-container">
                {
                    loading ? <Loader/> :
                    detalleFiltrado ? <p>Muestro comp de detalle</p> :
                    misProductos.map ((el) => {
                        return (
                        <Item key={el.id} nombre={el.nombre} precio={el.precio}/>
                        )
                    })
                };
            </div>
            </>
    );
};

export default ItemListContainer;