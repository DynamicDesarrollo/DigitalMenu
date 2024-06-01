// src/components/Loader.js

import flameLoader from '../../public/vite.svg'; // Ajusta la ruta según tu estructura de carpetas

const Loader = () => {
    return (
        <div className="loader">
            <img src={flameLoader} alt="Loading..." />
        </div>
    );
};

export default Loader;
