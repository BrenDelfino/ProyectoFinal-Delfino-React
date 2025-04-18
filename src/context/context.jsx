import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const agregarAlCarrito = (producto) => {
        Toastify({
            text: "Producto agregado",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "bottom", 
            position: "left",
            stopOnFocus: true,
            style: {
            background: "rgb(240, 128, 184)",
            borderRadius: "2rem",
            },
            onClick: function(){}
        }).showToast();
        if (carrito.some(el => el.id === producto.id)) {
            const newCarrito = carrito.map(el => {
                if (el.id === producto.id) {
                    return {
                        ...el,
                        cantidad: el.cantidad + producto.cantidad,
                    };
                }
                return el;
            });
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, producto]);
        }
        setTotalAmount(prevAmount => prevAmount + producto.precio * producto.cantidad);
    };

    const getTotalAmount = () => totalAmount;

    const eliminarProducto = (id) => {
        const newCarrito = carrito.filter(el => el.id !== id);
        setCarrito(newCarrito);
        Toastify({
            text: "Producto eliminado",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", 
            position: "center",
            stopOnFocus: true,
            style: {
            background: "rgb(197, 46, 46)",
            borderRadius: "2rem",
            },
            onClick: function(){} 
        }).showToast();
    };

    const resetCart = () => {
        setCarrito([]);
        setTotalAmount(0);
    };

    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito, resetCart, getTotalAmount, eliminarProducto }}>
            {props.children}
        </AppContext.Provider>
    );
};