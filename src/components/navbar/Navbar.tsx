import { BasketIcon, UserCircleIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

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
            
                <div className="container flex justify-between text-lg px-5 py-1 items-center font-bold">
                    <Link to ="/">FARMÁCIA</Link>
                    

                    <div className="flex items-center flex-1 max-w-md mx-4 gap-2">
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            className="flex-1 px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 font-normal"
                        />
                        <button
                            className="p-3 rounded-md hover:opacity-90"
                            style={{ backgroundColor: "#163725" }}
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                            />
                            </svg>
                        </button>
                        </div>
                    <div className='flex gap-4 font-medium'>
                        <Link to="/categorias" className="hover:underline">
                            Categorias
                        </Link>
                        <Link to="/cadastrarcategoria" className="hover:underline">
                            Cadastrar Categoria
                        </Link>
                        <UserCircleIcon size={32} color="#163725" />
                        <BasketIcon size={32} color="#163725" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar