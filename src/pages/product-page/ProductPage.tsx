
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Product from "../../models/Product"
import { search } from "../../services/Service"
import { Button } from "flowbite-react"
import imgWhite from "../../assets/Linha Luminosa.png"
import ListRecentProducts from "../../components/product/list-products/ListRecentProducts"
import { DNA } from "react-loader-spinner"

function ProductPage() {

  const [product, setProducts] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    stock: 0,
    media: "",
    date: "",
    subcategory: null,
  })

  const [valor, setValor] = useState(1);
  const [total, setTotal] = useState(0);


  function handleClick(e: string) {
    let newValue = valor;
    if (e == "+") {
      newValue = valor + 1;
    } else if (e === "-" && valor > 1) {
      newValue = valor - 1;
    }
    setValor(newValue);
    setTotal(product.price * newValue);
  }

  const { id } = useParams<{ id: string }>()
  let navigate = useNavigate()

  async function searchProducts(id: string) {
    try {
      await search(`/products/${id}`, setProducts)
      window.scrollTo(0, 0)
    } catch (error: any) {
      alert('Não foi possível buscar os produtos')
      navigate("/productcatalog")
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      searchProducts(id)
    }
  }, [id])

  useEffect(() => {
    setTotal(product.price * valor);
  }, [product, valor]);

  useEffect(() => {
    setValor(1);
  }, []);

  return (
    <>
      {product.price === 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div key={product.id} className="container mx-auto my-12 dark:text-cinza-100 p-12">
          <div className="flex justify-between gap-16">
            <img
              src={product.media === "" || null ? imgWhite : product.media}
              alt="imagem projeto"
              className="rounded-md aspect-video w-2/3 object-cover shadow-sm"
            />
            <div className="w-full">

              <div className="border-b">
                <h1 className="font-semibold text-4xl mb-4">{product.name}</h1>

                <span className="text-gray-500 text-base">
                  {product.subcategory?.name.toLocaleUpperCase()}
                </span>
              </div>

              <div className="pt-16">
                <h2 className="text-4xl font-bold text-marrom-800">
                  R$ {total.toFixed(2).replace(".", ",") }
                </h2>
                <p>
                  À vista ou em até 3x sem juros
                </p>
              </div>

              <div className="py-12">
                <p>Quantidade</p>
                <div className="mt-2 flex justify-center items-center border w-[7.5rem] rounded-3xl">
                  <button className="w-10 font-bold h-10 bg-marrom-100 rounded-full" onClick={() => handleClick("-")}>
                    -
                  </button>
                  <input className="p-2 w-10 h-10 flex " value={valor} />
                  <button className="w-10 h-10 font-bold bg-marrom-100 rounded-full" onClick={() => handleClick("+")}>
                    +
                  </button>
                </div>
              </div>

              <div className="pt-5">
                <Button className="px-6 bg-marrom-800 w-full mb-3">
                  <Link className="text-sm" to={`/product/${product.id}`}>COMPRE AGORA</Link>
                </Button>
              </div>

            </div>
          </div>

          <div>
            <h3 className="border-b py-2 mt-24 mb-8 text-xl font-bold">
              Descrição do Produto
            </h3>
            <p className="">{product.description}</p>
          </div>



          <div>
            <h3 className="border-b py-2 mt-16 mb-8 text-xl font-bold">
              Clientes Também Compraram
            </h3>
            <div className="flex gap-12 p-5 w-full">
              <ListRecentProducts />
            </div>
          </div>

        </div>

      )}

    </>
  )
}
export default ProductPage