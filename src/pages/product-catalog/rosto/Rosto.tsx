import ListProducts from "../../../components/product/list-products/ListProducts"


function Rosto() {

    return <>

        <div className="p-10 py-32">
            <h3 className='text-3xl text-marrom-800 font-semibold border-b-2 pb-4' >Conheça nossos produtos para rosto</h3>
            <div className="pt-6">
                <ListProducts page="rosto" />
            </div>
        </div>


    </>
}
export default Rosto
