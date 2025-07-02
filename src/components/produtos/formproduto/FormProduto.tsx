import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', })
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            console.error();
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            console.error();
            
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            console.error();
            
        }
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
	
        const { type, value, name } = e.target
        let valor: string | number = value
        
        if (['number', 'range'].includes(type) || (!isNaN(Number(value)) && value !== '')) {
            // Remove zeros à esquerda mantendo pelo menos um dígito
            const valorSemZeros = value.replace(/^0+(?!$)/, '') || '0'
            valor = parseFloat(Number(valorSemZeros).toFixed(2))
        }
        
        setProduto({
            ...produto,
            [name]: valor,
            categoria: categoria,
        })
    }


    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);

                alert('Produto atualizado com sucesso')

            } catch (error: any) {
                alert('Erro ao atualizar o produto.')
                console.error();
                
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto)

                alert('Produto cadastrado com sucesso');

            } catch (error: any) {
                alert('Erro ao atualizar o produto.')
                console.error();
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.nome === '';


    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        placeholder="Insira o nome do produto."
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço</label>
                    <input
                        placeholder="Insira o preço do produto"
                        name="preco"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={
                            produto.preco === 0 ||
                            produto.preco === undefined
                            ? ''
                            : produto.preco
                        }
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="number"
                        step=".01"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Capa</label>
                    <input
                        type="text"
                        placeholder="URL da capa do produto"
                        name="foto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' 
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma categoria</option>
                        
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.nome}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button 
                    type='submit' 
                    className='rounded disabled:bg-slate-200 text-slate-100 bg-emerald-800 
                               hover:bg-emerald-900 font-bold w-1/2 mx-auto py-2 flex justify-center'
                    disabled={carregandoCategoria}
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormProduto