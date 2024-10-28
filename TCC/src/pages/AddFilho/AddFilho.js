// Importa o arquivo CSS que contém os estilos da página
import './AddFilho.css';
import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Cria um componente chamado Vantagens
export default function AddFilho() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                <h4>Senha</h4>
                <div className="input-box">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Insira uma Senha" 
                        required 
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        style={{
                            position: "absolute",
                            right: "74vw",
                            top: "76.4%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                        }}
                    />
                </div>                         
                {/* Botão de envio */}
                <button className='add' type="submit"><b>Adicionar</b></button>
                <br />
            </form>
        </div>
    );
};