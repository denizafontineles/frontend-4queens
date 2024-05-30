import { useEffect, useState } from "react"
import Product from "../../../models/Product"
import { search } from "../../../services/Service"
import CardProduct from "../card-product/CardProduct"
import { ListGroup } from "flowbite-react"
import Subcategory from "../../../models/Subcategory"
import { DNA } from "react-loader-spinner"
import { ArrowRight } from "phosphor-react"


function ListProducts(props: any) {

    const [products, setProducts] = useState<Product[]>([])
    const [subcategories, setSubcategories] = useState<Subcategory[]>([])
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<
        string | null
    >(null)

    const categoryFilter = products.filter(
        (product) => product.subcategory?.category?.name.toLocaleLowerCase() === props.page,
    )
    const categoryOrder = categoryFilter.sort((a, b) =>
        a.name.localeCompare(b.name)
    )

    const subcategoryFilter = subcategories.filter(
        (subcategory) => subcategory.category?.name.toLocaleLowerCase() === props.page,
    )
    const subcategoryOrder = subcategoryFilter.sort((a, b) =>
        a.name.localeCompare(b.name)
    )

    const productFilter = categoryFilter.filter(
        (product) => product.subcategory?.name === categoriaSelecionada
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

    function handleCategoriaClick(categoriaNome: string) {
        if (categoriaNome === categoriaSelecionada) {
            setCategoriaSelecionada(null)
        } else {
            setCategoriaSelecionada(categoriaNome)
        }
    }

    useEffect(() => {
        searchSubcategories()
        searchProducts()
    }, [categoriaSelecionada, subcategories.length])

    return <>
        <div>

            {products.length === 0 && subcategories.length === 0 ?
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
                :
                <div className="flex gap-12 pt-6 w-full">
                    <ListGroup className="w-60 h-min">
                        {subcategoryOrder.map((subcategory) => (
                            <ListGroup.Item
                                key={subcategory.id}
                                onClick={() => handleCategoriaClick(subcategory.name)}
                                className={`${subcategory.name === categoriaSelecionada &&
                                    "font-bold"
                                    }`}
                            >
                                <p className="truncate text-base" title={subcategory.name}>
                                    {subcategory.name}
                                </p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <div >
                        {categoriaSelecionada === null ?
                            <div>
                                <h3 className="text-xl text-marrom-800 pb-8">TODAS AS SUBCATEGORIAS</h3>
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-9 mx-auto">
                                    {categoryOrder.map((product) => (
                                        <CardProduct key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                            :

                            <div>
                                <h3 className="text-xl text-marrom-800 pb-8">{categoriaSelecionada.toLocaleUpperCase()}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-9 mx-auto">
                                    {productOrder.map((product) => (
                                        <CardProduct key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    </>
}
export default ListProducts