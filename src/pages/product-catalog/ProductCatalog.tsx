import ListProducts from "../../components/product/list-products/ListProducts"

function ProductCatalog() {
  return (
    <>

      <div>
        <h1 className="text-3xl font-bold text-red-500 underline text-center">PRODUCT CATALOG</h1>
        <ListProducts />
      </div>


    </>
  )
}
export default ProductCatalog