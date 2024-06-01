
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ categories }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">Inicio</Link>
                <div className="categories-list">
                    <ul>
                        {categories.map(category => (
                            <li key={category.id}>
                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
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
