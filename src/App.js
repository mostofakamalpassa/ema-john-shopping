import React from 'react';
import './App.css';
import Header  from './commponents/Header/Header'; 
import Shop from './commponents/Shop/Shop';
import Orders from './commponents/Orders/Order';
import Inventory from './commponents/Inventory/Inventory';
import { Routes, Route, Link } from "react-router-dom";
import About from './commponents/About/About';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/home' element={<Shop></Shop>}></Route>
          <Route path='/order' element={<Orders></Orders>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/about' element={<About></About>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
