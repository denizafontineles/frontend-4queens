import { useEffect, useState } from "react"
import Product from "../../../models/Product"
import Subcategory from "../../../models/Subcategory"
import { search } from "../../../services/Service"

function ListProducts() {

    const [products, setProducts] = useState<Product[]>([])
    const [subcategories, setSubcategories] = useState<Subcategory[]>([])

    async function searchProducts() {
        try {
            await search("/products", setProducts)
        } catch (error: any) {
            alert('Não foi possível buscar os produtos')
        }
    }

    useEffect(() => {
        searchProducts()
    }, [products.length])

    async function searchSubcategories() {
        try {
            await search("/subcategories", setSubcategories)
        } catch (error: any) {
            alert('Não foi possível buscar as subcategorias')
        }
    }

    useEffect(() => {
        searchSubcategories()
    }, [subcategories.length])

    return (
        <>
            <div>
                <div>
                    {products.map((product) => (
                        <p>
                            {product.name}
                            {product.price}
                        </p>
                    ))}
                </div>

                <div>
                    {subcategories.map((subcategory) => (
                        <p>
                            {subcategory.name}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ListProducts