// src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de importar el archivo CSS si tienes estilos específicos para Navbar

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
        </nav>
    );
};

export default Navbar;

