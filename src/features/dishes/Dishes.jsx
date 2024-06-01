// src/features/dishes/Dishes.js

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDishesByCategory } from './dishesSlice';

const Dishes = () => {
    const { categoryId } = useParams();
    const dishes = useSelector((state) => selectDishesByCategory(state, parseInt(categoryId)));

    return (
        <div className="dishes-container">
            <div className="dishes-grid">
                <ul>
                    {dishes.map((dish) => (
                        <li className="dish-card" key={dish.id}>
                            <h2>{dish.name}</h2>
                            <p>{dish.description}</p>
                            <p>Precio: ${dish.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dishes;
