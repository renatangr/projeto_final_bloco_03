import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'
import FormProduto from '../formproduto/FormProduto';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded shadow transition duration-300 ease-in-out"
                    >
                        Cadastrar Produto
                    </button>
                }
                modal
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto