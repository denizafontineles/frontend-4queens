import { useEffect, useState } from "react"
import { search } from "../../../services/Service"
import Category from "../../../models/Category"
import Subcategory from "../../../models/Subcategory"

function ListSubcategories() {

    const [subcategories, setSubcategories] = useState<Subcategory[]>([])
    const [categories, setcategories] = useState<Category[]>([])

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

    async function searchCategory() {
        try {
            await search("/categories", setcategories)
        } catch (error: any) {
            alert('Não foi possível buscar as categorias')
        }
    }

    useEffect(() => {
        searchCategory()
    }, [categories.length])

    return (
        <>
            <div>
                <div>
                    {subcategories.map((subcategory) => (
                        <p>
                            {subcategory.name}
                        </p>
                    ))}
                </div>

                <div>
                    {categories.map((category) => (
                        <p>
                            {category.name}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListSubcategories