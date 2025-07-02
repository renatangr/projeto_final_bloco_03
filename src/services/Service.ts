import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-ug0p.onrender.com/'
})

export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

export const deletar = async(url: string) => {
    await api.delete(url)
}

// Método adicional de busca

export const buscarProdutoNome = async (nome: string, setDados: Function) => {
    try {
        const resposta = await api.get(`/produtos/nome/${nome}`);
        setDados(resposta.data);
    } catch (error) {
        console.error("Erro ao buscar produto pelo nome:", error);
    }
};
