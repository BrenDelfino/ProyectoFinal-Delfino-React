import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { productos } from '../../productos.js';
import { Link } from 'react-router-dom';

function ItemDetail() {

    const {id} = useParams();
    const [detalle, setDetalle] = useState(null);

    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
    };

    useEffect (() => {
        fetchData().then(response => {
            const detalleDelProducto = response.find(el => el.id === id);
            setDetalle(detalleDelProducto);
        })           
        .catch(err => console.error(err));
    },[id]);

    if (!detalle) {
        return <p>Cargando producto...</p>;
    }

    return (
            <div className="card-detail">
                <h2><b>{detalle.nombre || "NO DISPONIBLE"} </b></h2>
                <h3>Precio: ${detalle.precio || "SIN STOCK"} </h3>
                <p><b>{detalle.descripcion}</b></p>
                <p>Quedan: {detalle.stock}</p>
                <button className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                <Link to={`/productos`}>
                    <button className="card-btn">Volver al inicio</button>
                </Link>
                
            </div>
    );
};

export default ItemDetail;