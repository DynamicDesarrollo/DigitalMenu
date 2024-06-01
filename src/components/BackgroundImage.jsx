// src/components/BackgroundImage.js

// src/components/BackgroundImage.jsx

// eslint-disable-next-line react/prop-types
const BackgroundImage = ({ children }) => {
    return (
        <div
            style={{
                backgroundImage: `url(/assets/background.jpeg)`, // Usar URL relativa
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowY: 'auto',
            }}
        >
            {children}
        </div>
    );
};

export default BackgroundImage;
