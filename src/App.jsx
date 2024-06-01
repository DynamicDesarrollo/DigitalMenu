
// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './features/categories/Categories';
import Dishes from './features/dishes/Dishes';
import BackgroundImage from './components/BackgroundImage';

import './App.css';

const App = () => {



  return (
    <BackgroundImage>

      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route path="/category/:categoryId" element={<Dishes />} />
        </Routes>
      </>

    </BackgroundImage>
  );
};

export default App;
