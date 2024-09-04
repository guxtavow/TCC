import React from "react";
import './LoginScreen.css'; // Importa o arquivo CSS para estilização do componente
import { FcGoogle } from "react-icons/fc"; // Importa o ícone do Google do react-icons
import logo from "./img/login.png"; // Importa a imagem do logo para a tela de login
import GoogleIcon from "./img/abelha.png"; // Importa o ícone da abelha para a tela de login

const LoginScreen = () => {
    return (
        <div className="wrapper"> {/* Wrapper que envolve todo o conteúdo da tela de login */}
            <form action=""> {/* Formulário de login */}
                <h1>
                    TechKids
                    {/*<img src={GoogleIcon} alt="Google Icon" className="bee-icon" /> (* Ícone ao lado do título) */}
                </h1>
                <img src={logo} alt="foto" title="foto" /> {/* Logo da aplicação */}
                <button className="Conta" type="submit">Criar Conta</button> {/* Botão para criar uma nova conta */}
                <h2>Logue-se agora</h2> {/* Subtítulo para instruir o usuário a logar */}
                <h3>Olá, Bem-vindo de volta!</h3> {/* Mensagem de boas-vindas */}
                <button type="submit">
                    <FcGoogle className="icon" /> Login com Google {/* Botão para login com Google */}
                </button>
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
                        Ou Logue-se com o E-mail {/* Texto que separa as opções de login */}
                    </span>
                    <div style={{ 
                        flex: 0.13, 
                        borderBottom: '1px solid black' 
                        }} />
                </div>
                <h5>E-mail</h5> {/* Campo para o e-mail */}
                <div className="input-box">
                    <input type="text" 
                    placeholder="Insira seu e-mail" required /> {/* Campo de entrada para o e-mail */}
                </div>
                <h6>Senha</h6> {/* Campo para a senha */}
                <div className="input-box">
                    <input type="password" 
                    placeholder="Entre com sua senha" required /> {/* Campo de entrada para a senha */}
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Lembrar Senha</label> {/* Checkbox para lembrar a senha */}
                    <a href="#">Esqueceu a senha?</a> {/* Link para recuperação de senha */}
                </div>
                <button type="submit">Login</button> {/* Botão para realizar o login */}
                <div className="register-link">
                    <p>Não é registrado? Clique no botão Criar Conta</p> {/* Mensagem para novos usuários */}
                </div>
            </form>
        </div>
    );
};

export default LoginScreen; // Exporta o componente para ser utilizado em outros arquivos