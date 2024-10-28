// Importa o arquivo CSS que contém os estilos da página
import './EditarResp.css';
import React, { useState } from "react";
import Circulo from './elements/Circulo.png';
import { LuPencilLine } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Cria um componente chamado Vantagens
export default function EditarResp() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
        <div>
            <form action="">
                {/* Subtítulo */}
                <h1> <LuPencilLine/>  Editar Informações <LuPencilLine/></h1>
                <h4>Nome:</h4>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Ed Carlos" 
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

                <h4>Celular:</h4>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="+55 (11) 98715-1651" 
                        required 
                    />
                </div>
                <h4 className='Senha'>Senha Atual:</h4>
                <div className="input-box2">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Insira sua Senha Atual" 
                        required 
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        style={{
                            position: "absolute",
                            right: "34vw",
                            top: "77.2%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                        }}
                    />
                </div>                
                <h4 className='Senha1'>Nova Senha:</h4>
                <div className="input-box2">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Crie sua nova senha" 
                        required 
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        style={{
                            position: "absolute",
                            right: "34vw",
                            top: "91.2%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                        }}
                    />
                </div>

                <h4 className='Senha2'>Confirme sua Senha:</h4>
                <div className="input-box2">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Confirme sua senha" 
                        required 
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        style={{
                            position: "absolute",
                            right: "34vw",
                            top: "105%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                        }}
                    />
                </div>                
                <div className='card'>
                <img src={Circulo} alt='forma' id='Circulo' style={{ width: '200px'}} />
                <h2>Ed Carlos <LuPencilLine /></h2>
                {/* Campos de entrada de dados */}
                <h3>Você é?</h3>
                <div className="input-box1">
                    <input 
                        type="text" 
                        placeholder="Professor" 
                        required 
                    />
                </div>

                <div className='Atividades'>
                  <h6 className='frase'> Filhos(a) Registrados </h6>
                  <h6 className='frase1'> Nivel do filho </h6>
                </div>
                  <h7 className='numero'> 2 </h7> <h7 className='numero1'> 10 </h7>
                </div>

                {/* Botão de envio */}
                <button className='alterar' type="submit"><b>Alterar</b></button>
                <br />
            </form>
        </div>
    );
};