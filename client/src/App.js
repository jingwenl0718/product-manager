import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Main from './views/Main'
import ProductDetail from './views/ProductDetail'
import Update from './views/Update'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/allproducts" />
        <Route element={<ProductDetail/>} path="/products/:id" />
        <Route element={<Update/>} path="/products/:id/update" />
      </Routes>
    </div>
  );
}

export default App;
