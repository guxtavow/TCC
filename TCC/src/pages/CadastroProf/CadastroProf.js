import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './CadastroProf.css';
import logo2 from "./elements/login2.png";
import GoogleIcon2 from "./elements/abelha2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import CadastroApi from '../../services/CadastroApi';

const CadastroProf = () => {
    const [professorBtnColor, setProfessorBtnColor] = useState('#FF5D3B');
    const [responsavelBtnColor, setResponsavelBtnColor] = useState('#FF5D3B');
    const [showPassword, setShowPassword] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [instituicao, setInstituicao] = useState("");
    const [celular, setCelular] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("Professor");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const CadastroUsuario = async (e) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            setError("As senhas não coincidem!");
            return;
        }
        try {
            const response = await CadastroApi.cadastrarUsuario({
                nome,
                email,
                instituicao,
                celular,
                senha,
                tipo: tipoUsuario
            });

            if (response.status === 201) {
                alert("Cadastro realizado com sucesso!");
                localStorage.setItem("cadastroConcluido", "true");
                window.location.href = "/Login"; // Redireciona para a página de login
            } else {
                setError("Erro ao cadastrar: " + response.statusText);
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            setError("Erro ao realizar o cadastro. Tente novamente.");
        }
    };

    return (
        <div>
            <form onSubmit={CadastroUsuario}>
                {/* Cabeçalho principal */}
                <h1 className="TitSite2">
                    TechKids
                    <img src={GoogleIcon2} alt="Google Icon" className="bee-icon2" />
                </h1>

                {/* Botão de Login */}
                <button className="Login2" type="button" onClick={() => navigate("/LoginScreen")}>Login</button>

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
                        onClick={() => {
                            setTipoUsuario("Professor");
                            console.log("Tipo de usuário:", "Professor"); // Adicionei log
                        }}
                    >
                        Professor
                    </button>
                    <button 
                        className="btn2"
                        type="button"
                        style={{ backgroundColor: responsavelBtnColor }} 
                        onMouseEnter={() => setResponsavelBtnColor('#FF8A6E')}
                        onMouseLeave={() => setResponsavelBtnColor('#FF5D3B')}
                        onClick={() => {
                            setTipoUsuario("Responsável");
                            console.log("Tipo de usuário:", "Responsável");
                            navigate("/CadastroResp");
                        }}  
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
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required 
                    />
                </div>

                
                <h4 className="Informações2">E-mail Corporativo *</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="Insira seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <h4 className="Informações2">Instituição de Ensino</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="Insira sua instituição de ensino"
                        value={instituicao}
                        onChange={(e) => setInstituicao(e.target.value)}
                        required 
                    />
                </div>
                    

                <h4 className="Informações2">Celular</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="(11) 12345-6789"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        required 
                    />
                </div>

                <h4 className="Informações2">Senha</h4>
                <div className="input-boxCr">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Crie sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
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
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
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

                {/* Exibe mensagem de erro */}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default CadastroProf;
