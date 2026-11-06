import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from "./ProductRow";

export function ProductTable({ filterProducts }) {
  return(
    <>
      <table className="product-table">
        <thead className="table-header">
          <tr>
              <th>Nom</th>
              <th>Prix</th>
          </tr>
        </thead>
        <tbody className="product-row__cell">

            <ProductCategoryRow category={"Fruits"} />
            <ProductRow 
                category={"Fruits"}
                 filterProducts={filterProducts}
            /> 
            <ProductCategoryRow category={"Vegetables"}/>
            <ProductRow 
                category={"Vegetables"} 
                filterProducts={filterProducts}
            />
            
        </tbody>
    </table>
    </>
  )
}