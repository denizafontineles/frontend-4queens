import { Link } from 'react-router-dom'
import imgLogo from '../../assets/Screenshot 2024-05-26 141437.png'

function Navbar() {

  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 z-50 bg-marrom-100 flex justify-end py-4">
        <div className="container items-center flex justify-between text-lg">
          <Link to="/">
            <img
              src={imgLogo}
              className="ml-4 h-8 w-auto "
              alt=""
            />
          </Link>
          <div className="flex items-center gap-10 mr-4 font-bold">
            <Link to="/c/novidades" className="hover:opacity-45">
              Novidades
            </Link>
            <Link to="/c/corpo-e-banho" className="hover:opacity-45">
              Corpo e banho
            </Link>
            <Link to="/c/perfumaria" className="hover:opacity-45">
              Perfumaria
            </Link>
            <Link to="/c/cabelos" className="hover:opacity-45">
              Cabelos
            </Link>
            <Link to="/c/maquiagem" className="hover:opacity-45">
              Maquiagem
            </Link>
            <Link to="/c/rosto" className="hover:opacity-45">
              Rosto
            </Link>
            <Link to="/contato" className="hover:opacity-45">
              Contato
            </Link>
            <Link to="/contato" className="hover:opacity-45">
              Nossa Empresa
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
export default Navbar