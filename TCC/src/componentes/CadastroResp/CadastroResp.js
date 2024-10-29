import React, { useState } from "react";
import './CadastroResp.css'; // Importa o arquivo CSS para estilização
import logo2 from "./img3/login3.png"; // Importa uma imagem
import GoogleIcon2 from "./img3/abelha3.png"; // Importa outra imagem
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
            {/* Instrução para seleção de perfil */}
            <p className="perfis"><b>Escolha o perfil de acesso:</b></p>

            {/* Botões de seleção de perfil */}
                <div className="button-group">
                    <button 
                        className="btn"
                        style={{ backgroundColor: professorBtnColor }} 
                        onMouseEnter={() => setProfessorBtnColor('#FF8A6E')}
                        onMouseLeave={() => setProfessorBtnColor('#FF5D3B')}
                        onClick={() => console.log('Botão Professor clicado')}
                    >
                        Professor
                    </button>
                    <button 
                        className="btn"
                        style={{ backgroundColor: responsavelBtnColor }} 
                        onMouseEnter={() => setResponsavelBtnColor('#FF8A6E')}
                        onMouseLeave={() => setResponsavelBtnColor('#FF5D3B')}
                        onClick={() => console.log('Botão Responsável clicado')}
                    >
                        Responsável
                    </button>
                </div>
            <form>
                {/* Cabeçalho principal */}
                <h1>
                    TechKids
                    <img src={GoogleIcon2} alt="Google Icon" className="bee-icon" />
                </h1>

                <button className="Criar">Login</button>

                {/* Imagem principal */}
                <img src={logo2} alt="foto" title="foto" />

                {/* Subtítulo */}
                <h2>Crie sua conta agora</h2>

                {/* Campos de entrada de dados */}
                <h4>Nome Completo *</h4>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Insira seu nome completo" 
                        required 
                    />
                </div>

                <h4>E-mail *</h4>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Insira seu e-mail" 
                        required 
                    />
                </div>

                <h4>Grau de Parentesco</h4>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Informe o grau de parentesco com o aluno(a)" 
                        required 
                    />
                </div>

                <h4>Celular</h4>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="(11) 12345-6789" 
                        required 
                    />
                </div>

                <h4>Senha</h4>
                <div className="input-box">
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

                <h4>Confirme sua Senha</h4>
                <div className="input-box">
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
                <button type="submit">Criar Conta</button>
            </form>
        </div>
    );
};

export default CadastroProf;