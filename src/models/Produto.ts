import type Categoria from "./Categoria";

export default interface Produto {
  id: number;
  nome: string;
  preco: string;
  foto: string;
  categoria?: Categoria | null;
}