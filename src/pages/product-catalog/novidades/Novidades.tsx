
import { useEffect, useState } from "react";
import ListProducts from "../../../components/product/list-products/ListProducts"
import Product from "../../../models/Product";
import { search } from "../../../services/Service";
import CardProduct from "../../../components/product/card-product/CardProduct";
import { DNA } from "react-loader-spinner";

function Novidades() {

    const [products, setProducts] = useState<Product[]>([])

    const recentsProducts = [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const viewProduct = recentsProducts.slice(0, 10);


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

    return <>
        <div className="p-10 py-32 ">
            <h3 className='text-3xl text-marrom-800 font-semibold border-b-2 pb-4' >Conheça nossas novidades</h3>

            <div className="pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto">

                {products.length === 0 ?
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper mx-auto"
                    />
                    : 
                    
                    viewProduct.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))
                    }

            </div>
        </div>
    </>
}
export default Novidades