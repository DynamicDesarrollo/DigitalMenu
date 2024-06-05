import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDishesByCategory } from './dishesSlice';

const Dishes = () => {
    const { categoryId } = useParams();
    const dishes = useSelector((state) => selectDishesByCategory(state, parseInt(categoryId)));
    const [selectedDishes, setSelectedDishes] = useState([]);
    const [address, setAddress] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [customerName, setCustomerName] = useState('');

    // Número de celular fijo del restaurante
    const restaurantPhoneNumber = '1234567890';

    const addToOrder = (dish) => {
        setSelectedDishes((prevSelectedDishes) => [...prevSelectedDishes, dish]);
    };

    const generateWhatsAppMessage = () => {
        let message = `Hola, me gustaría ordenar:\n`;
        selectedDishes.forEach((dish, index) => {
            message += `${index + 1}. ${dish.name} - $${dish.price}\n`;
        });
        message += `\nNombre: ${customerName}\n`;
        message += `Dirección: ${address}\n`;
        message += `Teléfono: ${customerPhoneNumber}\n`;
        return message;
    };

    const handleWhatsAppClick = () => {
        const message = generateWhatsAppMessage();
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${restaurantPhoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="dishes-container">
            <div className="dishes-grid">
                {dishes.map((dish) => (
                    <div className="dish-card" key={dish.id}>
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p>Precio: ${dish.price}</p>
                        <button onClick={() => addToOrder(dish)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">Agregar al pedido</button>
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Nombre"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="border border-gray-300 rounded py-2 px-4 mb-4"
            />
            <input
                type="text"
                placeholder="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded py-2 px-4 mb-4"
            />
            <input
                type="text"
                placeholder="Teléfono"
                value={customerPhoneNumber}
                onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                className="border border-gray-300 rounded py-2 px-4 mb-4"
            />
            <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
                Enviar pedido por WhatsApp
            </button>
        </div>
    );
};

export default Dishes;
