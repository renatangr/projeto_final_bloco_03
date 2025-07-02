import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import type Produto from "../../../models/Produto"

function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()


    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            console.error();
            
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)

            alert('Produto apagado com sucesso')

        } catch (error: any) {
            alert('Erro ao deletar o produto.')
            console.error();
            
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-emerald-700 text-white font-bold text-2xl'>
                    Produto
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{produto.nome}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-600 hover:bg-red-900 w-full py-2 cursor-pointer'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-[#1f5540] hover:bg-[#243a31] flex items-center justify-center cursor-pointer'
                        onClick={deletarProduto}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto