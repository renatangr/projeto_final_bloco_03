import { useNavigate, useSearchParams } from "react-router-dom";
import CardCategorias from "../cardcategorias/CardCategorias";
import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar, buscarCategoriaNome } from "../../../services/Service";
import { Bars } from "react-loader-spinner";

function ListaCategorias() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const nomeBuscado = searchParams.get("nome");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    setIsLoading(true);
    try {
      if (nomeBuscado) {
        await buscarCategoriaNome(nomeBuscado, setCategoria);
      } else {
        await buscar("/categorias", setCategoria);
      }
    } catch (error: any) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    buscarCategorias();
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
          {(!isLoading && categoria.length === 0) && (
            <span className="text-3xl text-center my-8 text-emerald-950">
              Nenhuma categoria foi encontrada{nomeBuscado && ` para "${nomeBuscado}"`}.
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
