
// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './features/categories/Categories';
import Dishes from './features/dishes/Dishes';
import BackgroundImage from './components/BackgroundImage';
import { useState, useEffect } from 'react'; // Importa useState y useEffect si es necesario
import './App.css';

const App = () => {
  // Define el estado para almacenar las categorías
  const [categories, setCategories] = useState([]);

  // Simula la obtención de las categorías (por ejemplo, desde un servicio)
  useEffect(() => {
    // Aquí puedes obtener las categorías de donde sea necesario (por ejemplo, de una API)
    // Este es solo un ejemplo, asegúrate de ajustar esto según tu implementación real
    const fetchCategories = async () => {
      try {
        // Lógica para obtener las categorías
        const categoriesData = [ /* Aquí coloca tus categorías */];
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Llama a la función para obtener las categorías
    fetchCategories();
  }, []); // La dependencia vacía [] asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <BackgroundImage>
      <>
        {/* Pasa las categorías como una propiedad al componente Navbar */}
        <Navbar categories={categories} />
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route path="/category/:categoryId" element={<Dishes />} />
        </Routes>
      </>
    </BackgroundImage>
  );
};

export default App;
