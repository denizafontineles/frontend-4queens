import { Button, Card } from "flowbite-react"
import Product from "../../../models/Product"
import { Link } from "react-router-dom"
import imgWhite from "../../../assets/Linha Luminosa.png"

interface CardProductProps {
    product: Product
}

function CardProduct({ product }: CardProductProps) {

    return (
        <>
            <div className="bg-white flex flex-col justify-between max-w-xs rounded-lg overflow-hidden shadow-xl" >
                <Link to={`/product/${product.id}`}>
                    <img className="h-[38vh] w-full rounded-t-sm " src={
                        product.media === "" || null ? imgWhite : product.media} alt="" />
                </Link>
                <div className="px-6 py-4">
                    <p className="text-gray-600 font-semibold text-xs mb-2">
                        {product.subcategory?.name.toLocaleUpperCase()}
                    </p>

                    <div className="h-[12vh]">
                        <h5 className="text-base mb-4 font-semibold tracking-tight text-gray-900 ">
                            {product.name}
                        </h5>

                    </div>
                    <div className="h-[8vh]">
                        <p className=" text-xl font-bold">
                            R$ {product.price.toFixed(2).replace(".", ",")}
                        </p>
                    </div>
                    <Link className="text-sm" to={`/product/${product.id}`}>
                        <Button className="px-6 bg-marrom-800 w-full mb-3">
                            COMPRE AGORA
                            <svg
                                className="-mr-1 mt-1 ml-3 h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </Button>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default CardProduct