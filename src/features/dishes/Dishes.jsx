// src/features/dishes/Dishes.js

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDishesByCategory } from './dishesSlice';

const Dishes = () => {
    const { categoryId } = useParams();
    const dishes = useSelector((state) => selectDishesByCategory(state, parseInt(categoryId)));

    return (
        <div className="dishes">
            <h1>Platos</h1>
            <ul>
                {dishes.map((dish) => (
                    <li key={dish.id}>
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p>Precio: ${dish.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dishes;
