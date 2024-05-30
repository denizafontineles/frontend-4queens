import { Link } from "react-router-dom"
import Category from "../../../models/Category"

interface DynamicNavProps {
    category: Category
}

function DynamicNav({ category }: DynamicNavProps) {

    return (
        <>
            <div className="container flex justify-between text-xl">
                <div>
                    {/* <Link to={`/c/corpo-e-banho/${category.id}`} className="hover:underline">
                        {category.name}
                    </Link> */}
                </div>
            </div>
        </>
    )
}

export default DynamicNav