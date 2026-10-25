import { use, useState } from "react";
import './App.css';

// ###  SearchBox Section ###
function Input({ setInput }) { 
  
  return(
    <div className="search-bar">
      <input className="search-bar__input" onChange={ (e) => {setInput(e.target.value);console.log(e.target.value)} }/>
    </div>
  );
}
function CheckBox({ checked }) {
  return(
    <>
    <label className="stock-checkbox">
      <input className="stock-checkbox__input" type="checkbox" onChange={(e) => {checked(e.target.checked)}}/>
      <span className="stock-checkbox__label">
        N'afficher que les produits en stock
      </span>
    </label>
    </>
  );
}


//  ###  ProductTable Section ###
function ProductTable() {
  return(
    <>
      <table className="product-table">
         <thead>
          {/*  En-têtes  */}
        </thead>

        <tbody>
          {/*  Catégorie Fruits  */}
          {/*  Lignes de produits */}
        </tbody>

        <tbody>
          {/*  Catégorie Vegetables  */}
          {/* Lignes de produits  */}
        </tbody>
    </table>
    </>
  )
}



// App
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
  console.log(filterProducts);

  return (
    <main className="app">
      <section className="app__content">
        <>
          <Input setInput={ setInput } />
          <CheckBox checked={ setIsChecked }/>
       </>
        <ProductTable />
      </section>
    </main>
  );
}

export default App;
