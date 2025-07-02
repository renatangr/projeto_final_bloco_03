import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria';
import { PencilLineIcon, TrashIcon } from '@phosphor-icons/react';

interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border-gray-500 border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#45a082] text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full text-emerald-950'>{categoria.nome}</p>
            
            <div className="flex">
                 <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-[#1f5540] hover:bg-[#243a31] 
                    flex items-center justify-center py-2'>
                    <button className='cursor-pointer'><PencilLineIcon size={32} /></button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} 
                    className='text-slate-100 bg-red-600 hover:bg-red-900 w-full 
                        flex items-center justify-center'>
                    <button className='cursor-pointer'><TrashIcon size={32} /></button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias;