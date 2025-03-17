import './Item.css';

function Item({ id, nombre, precio, usarFiltro }) {

    function agregarAlCarrito() {
        console.log("Agregaste:", nombre);
    };

    return (
            <div className="card">
                <h2><b>{nombre || "NO DISPONIBLE"} </b></h2>
                <h3>Precio: ${precio || "SIN STOCK"} </h3>
                <button disabled = {!nombre} className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                <button disabled = {!nombre} className="card-btn" onClick={() => usarFiltro("Detalle", id)}>Ver más detalles</button>
            </div>
    );
};

export default Item;