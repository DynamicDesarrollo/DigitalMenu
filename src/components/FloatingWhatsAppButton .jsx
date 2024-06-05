import { useState } from 'react';
import { useSelector } from 'react-redux';

const FloatingWhatsAppButton = () => {
    const selectedDishes = useSelector((state) => state.dishes.selectedDishes);
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [monto, setMonto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWhatsAppClick();
    };

    const handleWhatsAppClick = () => {
        const mensaje = `Pedido:
        ${selectedDishes.map(dish => `\n- ${dish.name} - $${dish.price}`).join('')}
        \n\nNombre: ${nombre}
        \nDirección: ${direccion}
        \nTeléfono: ${telefono}
        \nMonto a pagar: $${monto}`;

        const url = `https://api.whatsapp.com/send?phone=573102102203&text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
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
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                            <label htmlFor="direccion">Dirección:</label>
                            <input
                                type="text"
                                id="direccion"
                                name="direccion"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                required
                            />
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required
                            />
                            <label htmlFor="monto">Monto a pagar:</label>
                            <input
                                type="number"
                                id="monto"
                                name="monto"
                                value={monto}
                                onChange={(e) => setMonto(e.target.value)}
                                required
                            />
                            <button type="submit" className="send-button">Enviar pedido</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingWhatsAppButton;
