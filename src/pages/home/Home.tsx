import { Link } from 'react-router-dom'
import imgContato from '../../assets/Contato.png'
import imgPreVenda from '../../assets/Home.png'
import imgDetalhes from '../../assets/Linha Luminosa.png'
import imgNossaEmpresa from '../../assets/Nossa Empresa.png'
import imgSubcategoria from '../../assets/Nossos Produtos.png'
import imgEspiada from '../../assets/Novidades.png'
import imgTrabalheConosco from '../../assets/Trabalhe Conosco.png'
import { useEffect, useState } from 'react'
import Product from '../../models/Product'
import { search } from '../../services/Service'
import CardProduct from '../../components/product/card-product/CardProduct'
import { DNA } from 'react-loader-spinner'
import ListRecentProducts from '../../components/product/list-products/ListRecentProducts'


function Home() {

  const [products, setProducts] = useState<Product[]>([])

  const productFilter = products.filter(
    (product) => product.subcategory?.name.toLocaleLowerCase() === "luminosa",
  )
  const productOrder = productFilter.sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  const viewProduct = productOrder.slice(0, 4);

  const recentsProducts = [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const viewProductRecent = recentsProducts.slice(0, 3);

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

  return (
    <>
      <div>
        <div>
          <div className='flex flex-col justify-center pt-14'>
            <Link to="/c/rosto/luminosa" >
              <img className='w-full' src={imgPreVenda} alt="" />
            </Link>
            <img className='w-auto' src={imgEspiada} alt="" />
            <img className='w-auto' src={imgDetalhes} alt="" />
            <img className='w-auto' src={imgSubcategoria} alt="" />
          </div>
        </div>
        <div className='flex flex-col justify-center bg-marrom-800 items-center pt-24'>
          <h3 className='text-4xl text-marrom-100 font-semibold ' >SEJA A PRIMEIRA A EXPERIMENTAR A EFICÁCIA DE LUMINOSA</h3>
          <div className="py-20 flex gap-12 p-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
              {viewProduct.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center bg-azul-500 items-center pt-24'>
          <h3 className='text-4xl font-semibold text-marrom-800 '>CONHEÇA AS NOVIDADES</h3>
          <div className="py-20 flex gap-12 p-10 w-full">
            <ListRecentProducts />
          </div>
        </div>

        <div className='flex flex-col justify-center'>
          <img className='w-auto' src={imgContato} alt="" />
          <img className='w-auto' src={imgTrabalheConosco} alt="" />
          <img className='w-auto' src={imgNossaEmpresa} alt="" />
        </div>
      </div>
    </>
  )
}
export default Home