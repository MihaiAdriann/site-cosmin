import React, { useState } from 'react';
import Layout from '../Components/Layout';


function Category() {
    const [inputValue, setInputValue] = useState('');
    const [categories, setCategories] = useState([]);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
   
      setCategories([...categories, inputValue]);
 
      setInputValue('');
    };
  
    return (
     <Layout>
            <div> 
                <h2>Category</h2>
        
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Introduceți o categorie"
                />
                <button type="submit">Adăugare categorie</button>
                </form>
        
                <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
                </ul>
            </div>
    </Layout>
    );
  }
  
  export default Category;
  