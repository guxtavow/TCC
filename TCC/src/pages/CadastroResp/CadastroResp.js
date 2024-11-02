import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './CadastroResp.css'; // Importa o arquivo CSS para estilização
import logo2 from "./elements/login3.png"; // Importa uma imagem
import GoogleIcon2 from "./elements/abelha3.png"; // Importa outra imagem
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import CadastroApi from '../../services/CadastroApi';

const CadastroResp = () => {
    const [professorBtnColor, setProfessorBtnColor] = useState('#FF5D3B');
    const [responsavelBtnColor, setResponsavelBtnColor] = useState('#FF5D3B');
    const [showPassword, setShowPassword] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [grau_parentesco, setGrau_Parentesco] = useState(""); // Novo campo
    const [celular, setCelular] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("Responsável");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Cria um objeto para o payload com os campos necessários
    const payload = {
        nome,
        email,
        senha,
        confirmarSenha,
        tipo: tipoUsuario,
        celular,
    };

    console.log('enviando',tipoUsuario)

    // Adiciona campos adicionais dependendo do tipo de usuário
    if (tipoUsuario === "Responsável") {
        payload.grau_parentesco = grau_parentesco;
    } else if (tipoUsuario === "Professor") {
        payload.instituicao_ensino = "Nome da Instituição"; 
    }

    const CadastroUsuario = async (e) => {
        e.preventDefault();
    
        if (senha !== confirmarSenha) {
            setError("As senhas não coincidem!");
            return;
        }
    
        const usuario = {
            nome,
            email,
            celular,
            grau_parentesco: grau_parentesco, // Campo específico para Responsável
            password: senha,
            confirmar_senha: confirmarSenha,
            tipo: tipoUsuario // Tipo de usuário para o endpoint
        };
    
        try {
            const response = await CadastroApi(usuario);
    
            if (response.status === 201) {
                alert("Cadastro realizado com sucesso!");
                navigate("/Login"); // Redireciona para a página de login
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
                <h1 className="TitSite1">
                    TechKids
                    <img src={GoogleIcon2} alt="Google Icon" className="bee-icon1" />
                </h1>

                {/* Botão de Login */}
                <button className="Login2" type="button" onClick={() => navigate("/LoginScreen")}>Login</button>

                {/* Imagem principal */}
                <img src={logo2} alt="foto1" id="foto1" />
                

                {/* Subtítulo */}
                <h2 className="CrieSuaConta1">Crie sua conta agora</h2>
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
                                navigate("/CadastroProf");
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
                            }}                            
                        >
                            Responsável
                        </button>
                    </div>

                {/* Campos de entrada de dados */}
                <h4 className="Informações1">Nome Completo *</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="Insira seu nome completo" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required 
                    />
                </div>

            
                <h4 className="Informações1">E-mail *</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="Insira seu e-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
        
                <h4 className="Informações1">Grau de Parentesco</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="Informe o grau de parentesco com o aluno(a)" 
                        value={grau_parentesco}
                        onChange={(e) => setGrau_Parentesco(e.target.value)}
                        required 
                    />
                </div>
                

                <h4 className="Informações1">Celular</h4>
                <div className="input-boxCr">
                    <input 
                        type="text" 
                        placeholder="(11) 12345-6789" 
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        required 
                    />
                </div>

                <h4 className="Informações1">Senha</h4>
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

                <h4 className="Informações1">Confirme sua Senha</h4>
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
                <button className="CriarConta" type="submit">Criar Conta</button>

                {/* Exibe mensagem de erro */}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default CadastroResp;
