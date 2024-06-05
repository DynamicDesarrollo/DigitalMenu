import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedDishes, selectTotalAmount } from './dishesSlice';

const FloatingWhatsAppButton = () => {
    const selectedDishes = useSelector(selectSelectedDishes);
    const totalAmount = useSelector(selectTotalAmount);
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWhatsAppClick();
    };

    const handleWhatsAppClick = () => {
        const mensaje = `Pedido:
        ${selectedDishes.map(dish => `\n- ${dish.name} (x${dish.quantity}) - $${Number(dish.price.replace('.', '')) * dish.quantity}`).join('')}
        \n\nNombre: ${nombre}
        \nDirección: ${direccion}
        \nTeléfono: ${telefono}
        \nMonto a pagar: $${totalAmount}`;

        const url = `https://api.whatsapp.com/send?phone=3102102203&text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <div className="floating-whatsapp-button">
                <button onClick={() => setShowModal(true)} className="send-button">
                    Enviar pedido
                </button>
            </div>
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
                                placeholder="Ingresa tu nombre"
                                required
                            />
                            <label htmlFor="direccion">Dirección:</label>
                            <input
                                type="text"
                                id="direccion"
                                name="direccion"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                placeholder="Ingresa tu dirección"
                                required
                            />
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                placeholder="Ingresa tu teléfono"
                                required
                            />
                            <label htmlFor="monto">Monto a pagar:</label>
                            <input
                                type="number"
                                id="monto"
                                name="monto"
                                value={totalAmount}
                                readOnly
                                required
                            />
                            <button type="submit" className="send-button">Enviar pedido</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingWhatsAppButton;
