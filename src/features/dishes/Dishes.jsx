
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDishesByCategory, addDishToOrder } from './dishesSlice';

const Dishes = () => {
    const { categoryId } = useParams();
    const dishes = useSelector((state) => selectDishesByCategory(state, parseInt(categoryId)));
    const dispatch = useDispatch();

    const handleAddToOrder = (dish) => {
        dispatch(addDishToOrder(dish));
    };

    return (
        <div className="dishes-container">
            <div className="dishes-grid">
                {dishes.map((dish) => (
                    <div className="dish-card" key={dish.id}>
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p>Precio: ${dish.price}</p>
                        <button onClick={() => handleAddToOrder(dish)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">Agregar al pedido</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dishes;
