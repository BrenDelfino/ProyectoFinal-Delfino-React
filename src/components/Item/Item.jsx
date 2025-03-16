import './Item.css';

function Item(props) {

    function agregarAlCarrito(){
        console.log("Agregaste:", props.nombre);
    };

    return (
            <div className="card">
                <h2><b>{props.nombre || "NO DISPONIBLE"} </b></h2>
                <p>Precio: ${props.precio || "SIN STOCK"} </p>
                <button className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                <button className="card-btn" onClick={() => usarFiltro("Detalle")}>Ver más detalles</button>
            </div>
    );
};

export default Item;