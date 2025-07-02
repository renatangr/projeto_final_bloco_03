import { BasketIcon, UserCircleIcon } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-emerald-100 text-emerald-950'>

                <img
                    src="/LogoFarmacia.png"
                    alt="Icon de Video Game"
                    className="w-12 h-12 justify-center"
                />
            
                <div className="container flex justify-between text-lg px-5 py-2 items-center font-bold">
                    FARMÁCIA

                    <div className='flex gap-4 font-medium'>
                        Categorias
                        Cadastrar Categoria
                        <UserCircleIcon size={32} color="#163725" />
                        <BasketIcon size={32} color="#163725" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar