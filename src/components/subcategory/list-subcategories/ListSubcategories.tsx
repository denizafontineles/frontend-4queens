import { useEffect, useState } from "react"
import Product from "../../../models/Product"
import { search } from "../../../services/Service"
import Subcategory from "../../../models/Subcategory"
import CardProduct from "../../product/card-product/CardProduct"

function ListSubcategories(props: any) {

    const [products, setProducts] = useState<Product[]>([])
    const [subcategories, setSubcategories] = useState<Subcategory[]>([])

    const productFilter = products.filter(
        (product) => product.subcategory?.name.toLocaleLowerCase() === props.page,
    )
    const productOrder = productFilter.sort((a, b) =>
        a.name.localeCompare(b.name)
    )

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

    return <>
        <div className="flex gap-12 p-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                {productOrder.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    </>
}
export default ListSubcategories