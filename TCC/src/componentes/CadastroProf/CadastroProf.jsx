import React, { useState } from "react";
import './CadastroProf.css'; // Importa o arquivo CSS para estilização
import { FcGoogle } from "react-icons/fc"; // Importa o ícone do Google
import logo2 from "./img2/login2.png"; // Importa uma imagem
import GoogleIcon2 from "./img2/abelha2.png"; // Importa outra imagem

const CadastroProf = () => {
    // Estados para a cor dos botões
    const [professorBtnColor, setProfessorBtnColor] = useState('#FF5D3B');
    const [responsavelBtnColor, setResponsavelBtnColor] = useState('#FF5D3B');

    return (
        <div className="wrapper"> {/* Contêiner principal da página */}
            <form action=""> {/* Início do formulário de cadastro */}
                {/* Cabeçalho principal com título e ícone */}
                <h1>
                    TechKids
                    <img src={GoogleIcon2} alt="Google Icon" className="bee-icon" />
                </h1>
                {/* Imagem principal logo abaixo do título */}
                <img src={logo2} alt="foto" title="foto" />
                
                {/* Subtítulo para incentivo de cadastro */}
                <h2>Crie sua conta agora</h2>

                {/* Botão para cadastro via Google */}
                <button type="submit">
                    <FcGoogle className="icon" /> Crie sua conta com Google
                </button>

                {/* Linha divisória com a palavra "Ou" para diferenciar métodos de cadastro */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    margin: '10px 0' 
                }}>
                    <div style={{ 
                        flex: 0.13, 
                        borderBottom: '1px solid black',
                    }} />
                    <span style={{ 
                        padding: '0 10px' 
                    }}>
                        Ou Crie com o E-mail
                    </span>
                    <div style={{ 
                        flex: 0.13, 
                        borderBottom: '1px solid black' 
                    }} />
                </div>
                
                <h7>Escolha o perfil de acesso:</h7>

                {/* Campo de seleção para o tipo de usuário */}
                <div className="button-group">
                    <button 
                        className="btn btn-professor" 
                        style={{ 
                            color: '#171C26', 
                            backgroundColor: professorBtnColor, 
                            fontWeight: 'bold',
                            border: '2px solid #992912', // Adicionando a borda
                        }} 
                        onMouseEnter={() => setProfessorBtnColor('#FF8A6E')} // Cor ao passar o cursor
                        onMouseLeave={() => setProfessorBtnColor('#FF5D3B')} // Cor original
                        onClick={() => {
                            // Lógica para redirecionar para a tela de cadastro do professor
                            console.log('Botão Professor clicado');
                        }}>
                        Professor
                    </button>
                    <button 
                        className="btn btn-responsavel" 
                        style={{ 
                            color: '#171C26', 
                            backgroundColor: responsavelBtnColor, 
                            fontWeight: 'bold',
                            border: '2px solid #992912', // Adicionando a borda
                        }} 
                        onMouseEnter={() => setResponsavelBtnColor('#FF8A6E')} // Cor ao passar o cursor
                        onMouseLeave={() => setResponsavelBtnColor('#FF5D3B')} // Cor original
                        onClick={() => {
                            // Lógica para redirecionar para a tela de cadastro do responsável
                            console.log('Botão Responsável clicado');
                        }}
                    >
                        Responsável
                    </button>
                </div>

                {/* Campo de entrada para nome completo */}
                <h3>Nome Completo *</h3>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Insira seu nome completo" 
                        required 
                    />
                </div>
                {/* Campo de entrada para o e-mail */}
                <h5>E-mail Corporativo *</h5>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Insira seu e-mail" 
                        required 
                    />
                </div>

                <h5>Instituição de Ensino </h5>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Insira sua instituição de ensino" 
                        required 
                    />
                </div>

                <h6>Celular </h6>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="(11) 12345-6789" 
                        required 
                    />
                </div>

                {/* Campo de entrada para senha */}
                <h6>Senha</h6>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Crie sua senha" 
                        required 
                    />
                </div>

                {/* Campo de confirmação de senha */}
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Confirme sua senha" 
                        required 
                    />
                </div>

                {/* Botão de envio para criar a conta */}
                <button type="submit">Criar Conta</button>
            </form>
        </div>
    );
};

export default CadastroProf; // Exporta o componente Cadastro como padrão
