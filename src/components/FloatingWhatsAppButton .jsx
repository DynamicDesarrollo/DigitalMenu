import { useState } from 'react';
import { useSelector } from 'react-redux';

const FloatingWhatsAppButton = () => {
    const selectedDishes = useSelector((state) => state.dishes.selectedDishes);
    const [address, setAddress] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [showModal, setShowModal] = useState(false);

    const restaurantPhoneNumber = '573136030702';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
        handleWhatsAppClick();
    };

    return (
        <div className="floating-whatsapp-button">
            <button onClick={() => setShowModal(true)}>Enviar pedido por WhatsApp</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Dirección"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Teléfono"
                                value={customerPhoneNumber}
                                onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                                required
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingWhatsAppButton;
