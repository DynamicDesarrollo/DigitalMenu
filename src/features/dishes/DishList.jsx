
import { useDispatch, useSelector } from 'react-redux';
import { addDishToOrder, removeDishFromOrder, selectDishesByCategory } from './dishesSlice';

// eslint-disable-next-line react/prop-types
const DishList = ({ categoryId }) => {
    const dispatch = useDispatch();
    const dishes = useSelector((state) => selectDishesByCategory(state, categoryId));

    return (
        <div>
            {dishes.map(dish => (
                <div key={dish.id} className="dish-item">
                    <h2>{dish.name}</h2>
                    <p>{dish.description}</p>
                    <p>Precio: ${dish.price}</p>
                    <button onClick={() => dispatch(addDishToOrder(dish))}>Añadir</button>
                    <button onClick={() => dispatch(removeDishFromOrder(dish))}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default DishList;
