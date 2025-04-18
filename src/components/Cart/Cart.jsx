import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Cart.css';

function Cart() {

    const { carrito, eliminarProducto, resetCart} = useAppContext();

    return (
        <div className='contenedor-carrito'>
            {carrito.length > 0 ?
                <>
                    {carrito.map(el => {
                        return (
                            <div key={el.id} className="carrito-item">
                                <p>{el.nombre}</p>
                                <p>${el.precio}</p>
                                <p>Cantidad: {el.cantidad}</p>
                                <p>Subtotal: ${el.cantidad * el.precio}</p>
                                <button className="card-btn" onClick={() => eliminarProducto(el.id)}>Eliminar del carrito</button>
                            </div>
                        )
                    })}
                    <p>Total: ${carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)}</p>
                    <button className="carrito-vaciar" onClick={() => resetCart()}>Vaciar carrito</button>
                    <Link to="/checkout">
                        <button className="finalizar-compra">Finalizar compra</button>
                    </Link>
                </>
                :
                <p>Carrito vacio</p>
            }
        </div >
    );
};

export default Cart;