export function ProductCategoryRow({category}) {
  return(
    <>
      {category && (
        <tr className="product-category-row__cell">
          <td colSpan="2"><b>{category}</b></td>
        </tr>
      )}
    </>
  )
}