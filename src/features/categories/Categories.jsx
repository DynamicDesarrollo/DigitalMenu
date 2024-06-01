// src/features/categories/Categories.jsx

// src/features/categories/Categories.jsx

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategories } from './categoriesSlice';
import './Categories.css'; // Importa tu archivo CSS

const Categories = () => {
    const categories = useSelector(selectCategories);

    return (
        <div className="categories-container">
            <h1>Barril Gourmet</h1>

            <div className="categories-grid">
                {categories.map((category) => (
                    <div key={category.id} className="card">
                        <Link to={`/category/${category.id}`}>
                            <h2>{category.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
