import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Contador from "../Contador/Contador";
import { db } from "../../firebaseConfig";
import { Link } from 'react-router-dom';
import { collection, getDoc, doc } from "firebase/firestore";
import { useAppContext } from '../../context/context';
import './ItemDetail.css';


const ItemDetail = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const { agregarAlCarrito } = useAppContext();

    useEffect(() => {
        const refCollection = collection(db, "products");
        const refDoc = doc(refCollection, id);
        getDoc(refDoc).then((res) => {
            setItem({ id: res.id, ...res.data() });
        });
    }, [id]);

    return (
        <div className="card-detail">
            <h3>Precio: ${item.precio || "SIN PRECIO"}</h3>
            <p>Descripción: {item.descripcion}</p>
            <button
                disabled={!item.nombre}
                className="card-btn"
                onClick={() =>
                    agregarAlCarrito({
                        id: item.id,
                        nombre: item.nombre,
                        precio: Number(item.precio),
                        cantidad: 1
                    })
                }
            >
                Agregar al carrito
            </button>
            <Link to="/productos">
                <button className="card-btn">Volver al inicio</button>
            </Link>
            <Contador item={item}/>
        </div>
    );
};

export default ItemDetail;
