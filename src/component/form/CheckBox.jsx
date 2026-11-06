export function CheckBox({ checked }) {
  return(
    <>
    <label className="stock-checkbox">
      <input 
        className="stock-checkbox__input"
        type="checkbox"
        onChange={(e) => {checked(e.target.checked)}}
      />
      <span className="stock-checkbox__label">
        N'afficher que les produits en stock
      </span>
    </label>
    </>
  );
}
