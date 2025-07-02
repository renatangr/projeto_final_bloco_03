import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'
import { PencilIcon, TrashIcon } from '@phosphor-icons/react'

interface CardProdutosProps {
  produto: Produto
}

function CardProdutos({ produto }: CardProdutosProps) {
  const valorFormatado = Number(produto.preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="bg-white rounded-2xl h-[406px] w-[233px] relative">
      
      {/* Ícones de edição e exclusão */}
      <div className="flex justify-end gap-1 px-2 py-2 text-teal-900">
        <div>
          <Link to= {`/editarproduto/${produto.id}`}>
          <PencilIcon size={32} />
          </Link>
        </div>
        <div>
          <Link to={`/deletarproduto/${produto.id}`}>
          <TrashIcon size={32} />
          </Link>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="grid gap-2 place-items-center px-2 py-3">
        <img
          className="h-[175px]"
          src={produto.foto}
          alt="Imagem do produto"
        />
        <div className="text-center font-semibold">{produto.nome}</div>
        <div className="text-center text-slate-800 font-bold">{valorFormatado}</div>
        <div className="italic text-sm text-gray-700">{produto.categoria?.nome}</div>
      </div>

      {/* Botão de compra */}
      <div className="grid place-items-center bg-emerald-700 px-1 py-3 rounded-b-2xl absolute bottom-0 left-0 w-full">
        <button className="text-white text-sm font-medium">Comprar</button>
      </div>
      
    </div>
  )
}

export default CardProdutos
