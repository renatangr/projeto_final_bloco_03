import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalproduto/ModalProduto";

function Home() {
    return (
        <>
        <div className="bg-gradient-to-r from-emerald-100 via-emerald-50 to-emerald-100 flex items-center justify-center">
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Texto */}
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
                        Seja Bem Vinde!
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600">
                        Cuidar de você é nossa missão.
                    </p>
                    <div className="flex gap-4">
                            <div className="flex gap-4">
                                <ModalProduto />
                            </div>
                        </div>
                </div>

                {/* Imagem */}
                <div className="flex justify-center">
                    <img
                        src="/Home.png"
                        alt="Imagem Página Home"
                        className="w-64 sm:w-72 md:w-96 h-auto object-contain drop-shadow-lg"
                    />
                </div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-100 via-emerald-50 to-emerald-100 flex">
                         <ListaProdutos />
        </div>
        </>
    );
}

export default Home;
