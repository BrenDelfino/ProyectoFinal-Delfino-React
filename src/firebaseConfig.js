import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzXd9yDdchp5dUPIv2qkhxMpCLp_k4TNI",
    authDomain: "proyectofinal-delfino-react.firebaseapp.com",
    projectId: "proyectofinal-delfino-react",
    storageBucket: "proyectofinal-delfino-react.firebasestorage.app",
    messagingSenderId: "976635781371",
    appId: "1:976635781371:web:516be90d0e1bd319e2505e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);