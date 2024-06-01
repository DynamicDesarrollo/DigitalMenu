import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { Link } from 'react-router-dom';
import './Navbar.css';

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


Navbar.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Navbar;
