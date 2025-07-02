
function Home() {
    return (
        <>
            <div className="bg-gray-200 flex justify-center">
                <div className='container grid grid-cols-2 text-gray-900'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Cuidar de você é nossa missão.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-gray-900 
                                            border-emerald-950 border-solid border-2 py-2 px-4'
                                >
                                Cadastrar Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="/Home.png"
                            alt="Imagem Página Home"
                            className='h-[300px]'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home