export function ProductRow({ category, filterProducts }) {
    
  const categoryFiltered = filterProducts.filter( (product)=> {
    return category.toLowerCase() === product.category.toLowerCase();
  })
  const Products = categoryFiltered.map((product)=>{
    return (
      <tr className="product shaded">
        <td className="product-row__name">
            { product.name }
        </td>
        <td className="product-row__price">
            { product.price }
        </td>
      </tr>
    )
  })
  return(
    <>
        {Products}
    </>
  )
}