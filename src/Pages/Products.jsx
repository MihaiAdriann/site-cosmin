import React, { useState, } from 'react';
import Layout from '../Components/Layout';


function Products() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
  
    // Funcție pentru gestionarea submisiei formularului
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aici puteți adăuga logica pentru salvarea produsului în baza de date sau într-o stare globală
      console.log('Produs adăugat:', {
        productName,
        description,
        category,
        image,
      });
      // Resetați valorile câmpurilor de intrare după trimiterea formularului
      setProductName('');
      setDescription('');
      setCategory('');
      setImage('');
    };
  
    return (
     <Layout>

      <div>
        <h2>Products</h2>
  
        <form onSubmit={handleSubmit}>
          <label htmlFor="productName">Nume produs</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
  
          <label htmlFor="description">Descriere</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
  
          <label htmlFor="category">Categorie</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selectați o categorie</option>
            {/* Aici puteți itera prin lista de categorii și crea opțiunile pentru select */}
            {/* Exemplu: */}
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
          </select>
  
          <label htmlFor="image">Imagine</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
  
          <button type="submit">Adăugare produs</button>
        </form>
      </div>
     </Layout>   
    );
  }
  
  export default Products;
  