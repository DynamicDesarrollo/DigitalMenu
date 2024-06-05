import { useState } from 'react';
import { useSelector } from 'react-redux';

const FloatingWhatsAppButton = () => {
    const selectedDishes = useSelector((state) => state.dishes.selectedDishes);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
        handleWhatsAppClick();
    };

    const handleWhatsAppClick = () => {
        // Implementa el manejo de la acción de enviar por WhatsApp aquí
    };

    return (
        <div className="floating-whatsapp-button">
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        {/* Coloca aquí tu formulario */}
                        <form onSubmit={handleSubmit}>
                            {/* Aquí van los campos del formulario */}
                            <button type="submit" className="send-button">Enviar pedido</button>
                        </form>
                    </div>
                </div>
            )}
            <button onClick={() => setShowModal(true)} className="send-button">
                Enviar pedido
            </button>
            <ul className="selected-dishes">
                {selectedDishes.map((dish, index) => (
                    <li key={index}>{dish.name} - ${dish.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default FloatingWhatsAppButton;
