import { useEffect, useState } from "react"
import { search } from "../../../services/Service"
import Category from "../../../models/Category"

function ListCategories() {
    const [categories, setcategories] = useState<Category[]>([])


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
                {categories.map((category) => (
                    <p>
                        {category.name}
                    </p>
                ))}
            </div>
        </>
    )
}
export default ListCategories