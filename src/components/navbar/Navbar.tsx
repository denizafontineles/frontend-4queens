import { Link } from 'react-router-dom'
import  imgLogo from '../../assets/logo.png'

function Navbar() {
  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 z-50 bg-marrom-100  flex justify-center py-4">
        <div className="container items-center flex justify-between text-xl">
          <Link to="/" className="text-2xl font-bold uppercase">
            <img
              src=""
              className="h-5 w-auto bg-cinza-100 rounded-xl"
              alt=""
            />
          </Link>
          <div className="flex items-center gap-4 mr-4">
            <Link to="/productcatalog" className="hover:underline">
              Projetos
            </Link>
            <Link to="/admin" className="hover:underline">
              Quem somos
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar