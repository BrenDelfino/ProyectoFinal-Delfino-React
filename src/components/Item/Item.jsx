import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, nombre, precio }) {

    function agregarAlCarrito() {
        console.log("Agregaste:", nombre);
    };

    return (
            <div className="card">
                <h2><b>{nombre || "NO DISPONIBLE"} </b></h2>
                <h3>Precio: ${precio || "SIN STOCK"} </h3>
                <button disabled = {!nombre} className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                <Link to={`/detalle/${id}`}>
                    <button disabled = {!nombre} className="card-btn">
                        Ver más detalles
                    </button>
                </Link>
                
            </div>
    );
};

export default Item;