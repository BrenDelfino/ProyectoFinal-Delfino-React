import './Checkout.css';
import { useState } from "react";
import { db } from '../../firebaseConfig';
import { addDoc, collection } from "firebase/firestore";
import { useAppContext } from "../../context/context";
import { Button, TextField } from "@mui/material";

const Checkout = () => {
    const [userInfo, setUserInfo] = useState({
        nombre: "",
        email: "",
        telefono: "",
    });

    const [orderId, setOrderId] = useState(null); 

    const { getTotalAmount, resetCart, carrito } = useAppContext();  

    console.log("Carrito en Checkout:", carrito); 

    const funcionFormulario = (evento) => {
        evento.preventDefault();

        if (!userInfo.nombre || !userInfo.email || !userInfo.telefono) {
            alert("Por favor, completa toda la información.");
            return;
        }

        let ordersCollection = collection(db, "orders");

        let totalAmount = getTotalAmount();
        
        let order = {
            buyer: userInfo,
            items: carrito, 
            total: totalAmount,
        };

        console.log("Pedido a enviar:", order);

        addDoc(ordersCollection, order).then((res) => {
            setOrderId(res.id);  
            resetCart();
        }).catch((error) => {
            console.error("Error al agregar el pedido:", error);
        });
    };

    const funcionInputs = (evento) => {
        const { value, name } = evento.target; 
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            {orderId ? (
                <h2>Gracias por tu compra, tu comprobante es: {orderId}</h2>
            ) : (
                <form
                    onSubmit={funcionFormulario}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "300px",
                        gap: "20px",
                    }}
                >
                    <TextField
                        variant="outlined"
                        type="text"
                        label="Nombre"
                        name="nombre"
                        onChange={funcionInputs}
                        value={userInfo.nombre}
                    />
                    <TextField
                        variant="outlined"
                        type="email"
                        label="Email"
                        name="email"
                        onChange={funcionInputs}
                        value={userInfo.email}
                    />
                    <TextField
                        variant="outlined"
                        type="tel"
                        label="Teléfono"
                        name="telefono"
                        onChange={funcionInputs}
                        value={userInfo.telefono}
                    />
                    <Button variant="contained" type="submit">
                        Enviar
                    </Button>
                    <Button variant="outlined" type="button" onClick={() => resetCart()}>
                        Cancelar
                    </Button>
                </form>
            )}
        </div>
    );
};

export default Checkout;