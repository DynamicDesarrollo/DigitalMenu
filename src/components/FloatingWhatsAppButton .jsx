import { useState } from 'react';
import { useSelector } from 'react-redux';

const FloatingWhatsAppButton = () => {
    const selectedDishes = useSelector((state) => state.dishes.selectedDishes);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWhatsAppClick();
    };

    const handleWhatsAppClick = () => {
        // Implementa el manejo de la acción de enviar por WhatsApp aquí
    };

    return (
        <div className="floating-whatsapp-button">
            <button onClick={() => setShowModal(true)} className="send-button">
                Enviar pedido
            </button>
            {selectedDishes.length > 0 && (
                <ul className="selected-dishes">
                    {selectedDishes.map((dish, index) => (
                        <li key={index}>{dish.name} - ${dish.price}</li>
                    ))}
                </ul>
            )}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <form onSubmit={handleSubmit}>
                            {/* Aquí van los campos del formulario */}
                            <button type="submit" className="send-button">Enviar pedido</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingWhatsAppButton;
