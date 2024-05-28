import ListCategories from "../../components/category/list-categories/ListCategories"
import ListSubcategories from "../../components/subcategory/list-subcategories/ListSubcategories"

function Admin() {
    return (
        <>
            <div>
                <h1>ADMIN</h1>
                <ListCategories />
                <ListSubcategories />
            </div>
        </>
    )
}
export default Admin