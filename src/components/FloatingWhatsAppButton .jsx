import { useState } from 'react';
import { useSelector } from 'react-redux';

const FloatingWhatsAppButton = () => {
    const selectedDishes = useSelector((state) => state.dishes.selectedDishes);
    const [address, setAddress] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [customerName, setCustomerName] = useState('');

    const restaurantPhoneNumber = '1234567890';

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
        <div className="fixed-bottom-center">
            <form>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={customerPhoneNumber}
                    onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                />
                <button onClick={handleWhatsAppClick}>Enviar pedido por WhatsApp</button>
            </form>
        </div>
    );
};

export default FloatingWhatsAppButton;
