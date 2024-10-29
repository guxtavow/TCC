import React, { useState } from "react";
import './CadastroProf.css';
import logo2 from "./elements/login2.png";
import GoogleIcon2 from "./elements/abelha2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const CadastroProf = () => {
    const [professorBtnColor, setProfessorBtnColor] = useState('#FF5D3B');
    const [responsavelBtnColor, setResponsavelBtnColor] = useState('#FF5D3B');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <form action="">
                {/* Cabeçalho principal */}
                <h1 className="TitSite2">
                    TechKids
                    <img src={GoogleIcon2} alt="Google Icon" className="bee-icon2" />
                </h1>

                <button className="Login3" type="button">Login</button>

                {/* Imagem principal */}
                <img src={logo2} alt="foto2" id="foto2" />

                {/* Subtítulo */}
                <h2 className="CrieSuaConta2">Crie sua conta agora</h2>

                {/* Instrução para seleção de perfil */}
                <p className="perfis"><b>Escolha o perfil de acesso:</b></p>

                {/* Botões de seleção de perfil */}
                <div className="button-group">
                    <button 
                        className="btn1"
                        type="button"
                        style={{ backgroundColor: professorBtnColor }} 
                        onMouseEnter={() => setProfessorBtnColor('#FF8A6E')}
                        onMouseLeave={() => setProfessorBtnColor('#FF5D3B')}
                        onClick={() => console.log('Botão Professor clicado')}
                    >
                        Professor
                    </button>
                    <button 
                        className="btn2"
                        type="button"
                        style={{ backgroundColor: responsavelBtnColor }} 
                        onMouseEnter={() => setResponsavelBtnColor('#FF8A6E')}
                        onMouseLeave={() => setResponsavelBtnColor('#FF5D3B')}
                        onClick={() => console.log('Botão Responsável clicado')}
                    >
                        Responsável
                    </button>
                </div>

                {/* Campos de entrada de dados */}
                <h4 className="Informações2">Nome Completo *</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="Insira seu nome completo" 
                        required 
                    />
                </div>

                <h4 className="Informações2">E-mail Corporativo *</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="Insira seu e-mail" 
                        required 
                    />
                </div>

                <h4 className="Informações2">Instituição de Ensino</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="Insira sua instituição de ensino" 
                        required 
                    />
                </div>

                <h4 className="Informações2">Celular</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="(11) 12345-6789" 
                        required 
                    />
                </div>

                <h4 className="Informações2">Senha</h4>
                <div className="input-boxCr">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Crie sua senha" 
                        required 
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                        }}
                    />
                </div>

                <h4 className="Informações2">Confirme sua Senha</h4>
                <div className="input-boxCr">
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
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                        }}
                    />
                </div>

                {/* Botão de envio */}
                <button className="CriarConta2" type="submit">Criar Conta</button>
            </form>
        </div>
    );
};

export default CadastroProf;
