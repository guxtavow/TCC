import React from "react";
import './Cadastro.css'; // Importa o arquivo CSS para estilização
import { FcGoogle } from "react-icons/fc"; // Importa o ícone do Google
import logo2 from "./elements/login2.png"; // Importa uma imagem
import GoogleIcon2 from "./elements/abelha2.png"; // Importa outra imagem

const Cadastro = () => {
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

                {/* Campo de entrada para nome completo */}
                <h3>Nome Completo</h3>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Insira seu nome completo" 
                        required 
                    />
                </div>

                {/* Campo de seleção para o tipo de usuário */}
                <h3>Você seria?</h3>
                <div className="categoria">
                    <select>
                        <option value="">Selecione uma opção</option>
                        <option value="professor">Professor</option>
                        <option value="responsavel">Responsável</option>
                    </select>
                </div>

                {/* Campo de entrada para o e-mail */}
                <h5>E-mail</h5>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Insira seu e-mail" 
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

export default Cadastro; // Exporta o componente Cadastro como padrão