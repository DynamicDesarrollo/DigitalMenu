// src/components/Navbar.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que el archivo CSS del Navbar esté importado

// eslint-disable-next-line react/prop-types
const Navbar = ({ categories }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">Inicio</Link>
                <button className="menu-button" onClick={toggleMenu}>
                    Menú
                </button>
            </div>
            {showMenu && (
                <div className="menu-dropdown">
                    <ul>
                        {categories.map(category => (
                            <li key={category.id}>
                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;


