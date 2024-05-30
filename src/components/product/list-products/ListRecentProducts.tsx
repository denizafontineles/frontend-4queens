import { useEffect, useState } from "react";
import Product from "../../../models/Product";
import { search } from "../../../services/Service";
import CardProduct from "../card-product/CardProduct";

function ListRecentProducts() {

    const [products, setProducts] = useState<Product[]>([])

    const recentsProducts = [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const viewProductRecent = recentsProducts.slice(0, 3);

    async function searchProducts() {
        try {
            await search("/products", setProducts)
            window.scrollTo(0, 0)
        } catch (error: any) {
            alert('Não foi possível buscar os produtos')
        }
    }

    useEffect(() => {
        searchProducts()
    }, [products.length])

    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                {viewProductRecent.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
export default ListRecentProducts