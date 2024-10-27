// Importa o arquivo CSS que contém os estilos da página
import './AddFilho.css';
import { LuPencilLine } from "react-icons/lu";

// Cria um componente chamado Vantagens
export default function AddFilho() {

  return (
        <div>
            <form action="">
                {/* Subtítulo */}
                <h1> <LuPencilLine/> Adicionar Filho <LuPencilLine/></h1>
                <h4>Nome:</h4>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Edi Carlos Junior" 
                        required 
                    />
                </div>

                <h4>E-mail:</h4>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="edicarlos@teste.com" 
                        required 
                    />
                </div>

                <h5>Data de Nascimento</h5>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="30/06/2018" 
                        required 
                    />
                    </div>
                {/* Botão de envio */}
                <button className='add' type="submit"><b>Adicionar</b></button>
                <br />
            </form>
        </div>
    );
};