import imgPreVenda from '../../assets/Home.png'
import imgEspiada from '../../assets/Novidades.png'
import imgDetalhes from '../../assets/Linha Luminosa.png'
import imgSubcategoria from '../../assets/Nossos Produtos.png'
import imgContato from '../../assets/Contato.png'
import imgTrabalheConosco from '../../assets/Trabalhe Conosco.png'
import imgNossaEmpresa from '../../assets/Nossa Empresa.png'


function Home() {
  return (
    <>
      <div>

        <div className='flex flex-col justify-center pt-14'>
          <img className='w-auto' src={imgPreVenda} alt="" />
          <img className='w-auto' src={imgEspiada} alt="" />
          <img className='w-auto' src={imgDetalhes} alt="" />
          <img className='w-auto' src={imgSubcategoria} alt="" />
        </div>
      </div>

      <div>

      </div>
      <div>
        <h1>QUI NÃO</h1>

      </div>

      <div className='flex flex-col justify-center'>
        <img className='w-auto' src={imgContato} alt="" />
        <img className='w-auto' src={imgTrabalheConosco} alt="" />
        <img className='w-auto' src={imgNossaEmpresa} alt="" />
      </div>

    </>
  )
}
export default Home