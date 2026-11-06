export function Input({ setInput }) { 
  
  return(
    <div className="search-bar">
      <input className="search-bar__input" onChange={ (e) => {setInput(e.target.value);console.log(e.target.value)} }/>
    </div>
  );
}