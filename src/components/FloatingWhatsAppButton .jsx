import { useState } from 'react';
import { useSelector } from 'react-redux';

const FloatingWhatsAppButton = () => {
    const selectedDishes = useSelector((state) => state.dishes.selectedDishes);
    const [address, setAddress] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [customerName, setCustomerName] = useState('');

    const restaurantPhoneNumber = '573102102203';

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
        <div>
            <input
                type="text"
                placeholder="Nombre"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="border border-gray-300 rounded py-2 px-4 mb-4 w-full"
            />
            <input
                type="text"
                placeholder="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded py-2 px-4 mb-4 w-full"
            />
            <input
                type="text"
                placeholder="Teléfono"
                value={customerPhoneNumber}
                onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                className="border border-gray-300 rounded py-2 px-4 mb-4 w-full"
            />
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                    style={{ backgroundColor: '#25D366' }}
                >
                    Enviar pedido por WhatsApp
                </button>
            </div>
        </div>
    );
};

export default FloatingWhatsAppButton;
