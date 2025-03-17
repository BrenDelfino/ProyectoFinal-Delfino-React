import './ItemDetail.css';

function ItemDetail({item, usarFiltro}) {

    const{ nombre, precio, detalle, stock } = item;

    return (
            <div className="card-detail">
                <h2><b>{nombre || "NO DISPONIBLE"} </b></h2>
                <h3>Precio: ${precio || "SIN STOCK"} </h3>
                <p><b>{detalle}</b></p>
                <p>Quedan: {stock}</p>
                <button disabled = {!nombre} className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                <button disabled = {!nombre} className="card-btn" onClick={() => usarFiltro("Mostrar todo")}>Volver al inicio</button>
            </div>
    );
};

export default ItemDetail;