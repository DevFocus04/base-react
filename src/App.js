import { useState } from "react";
import './App.css';
import { Input } from './component/form/Input';
import { CheckBox } from './component/form/CheckBox';
import { ProductTable } from "./component/product/ProductTable";




function App() {
   const [input, setInput] = useState('');
   const [isChecked, setIsChecked] = useState(false);

  //  <liste des Produits 
   const products = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
  ]

  // Filtrage des data
  const inputFormated = input.toLowerCase();

  const filterProducts = products.filter( (product) => {
    const searchInc = product.name.toLowerCase().includes(inputFormated);
    const searchStock = product.stocked || !isChecked;
    return searchInc && searchStock;
  })

  return (
    <main className="app">
      <section className="app__content">
        <>
          <Input setInput={ setInput } />
          <CheckBox checked={ setIsChecked }/>
       </>
        <ProductTable filterProducts={filterProducts}/>
      </section>
    </main>
  );
}

export default App;
