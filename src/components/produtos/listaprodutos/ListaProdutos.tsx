import { useNavigate, useSearchParams } from "react-router-dom";
import CardProdutos from "../cardprodutos/CardProdutos";
import { useEffect, useState } from "react";
import type Produto from "../../../models/Produto";
import { buscar, buscarProdutoNome } from "../../../services/Service";
import { Bars } from "react-loader-spinner";

function ListaProdutos() {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const nomeBuscado = searchParams.get("nome");

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
    setIsLoading(true);
    try {
          if (nomeBuscado) {
            await buscarProdutoNome(nomeBuscado, setProdutos);
          } else {
            await buscar("/produtos", setProdutos);
          }
        } catch (error: any) {
          console.log(error);
        }
    setIsLoading(false);
    }

    useEffect(() => {
    buscarProdutos();
    }, [nomeBuscado]);

    return (
        <>
        {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <Bars
            height="100"
            width="100"
            color="#163725"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            visible={true}
          />
        </div>
      )}
            <div className="flex justify-center w-full p-10">
                <div className="container flex flex-col mx-2">
                    {(!isLoading && produtos.length === 0) && (
                        <span className="text-3xl text-center my-8">
                        Nenhum produto foi encontrado{nomeBuscado && ` para "${nomeBuscado}"`}.
                        </span>
                    )}

                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-6 gap-4'>
                        {produtos.map((produto) => (
                            <CardProdutos key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaProdutos;