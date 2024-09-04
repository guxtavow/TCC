import React from "react";
import './Cadastro.css';
import { FcGoogle } from "react-icons/fc";
import logo2 from "./img2/login2.png";
import GoogleIcon2 from "./img2/abelha2.png";

const Cadastro = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>
                    TechKids
                    <img src={GoogleIcon2} alt="Google Icon" className="bee-icon" />
                </h1>
                <img src={logo2} alt="foto" title="foto" />
                <h2>Crie sua conta agora</h2>
                <button type="submit">
                    <FcGoogle className="icon" /> Crie sua conta com Google
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
                Ou Crie com o E-mail
                </span>
                <div style={{ 
                    flex: 0.13, 
                    borderBottom: '1px solid black' 
                    }} />
                </div>
                <h3>Nome Completo</h3>
                <div className="input-box">
                    <input type="text" 
                    placeholder="Insira seu nome completo" required />
                </div>
                <h4>Você seria?</h4>
                <div className="categoria">
                    <select>
                        <option value="">Selecione uma opção</option>
                        <option value="aluno">Aluno</option>
                        <option value="professor">Professor</option>
                        <option value="responsavel">Responsável</option>
                    </select>
                </div>
                <h5>E-mail</h5>
                <div className="input-box">
                    <input type="text" 
                    placeholder="Insira seu e-mail" required />
                </div>
                <h6>Senha</h6>
                <div className="input-box">
                    <input type="password" 
                    placeholder="Crie sua senha" required />
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder="Digite sua senha novamente" required />
                </div>
                <button type="submit">Criar Conta</button>
            </form>
        </div>
    );
};

export default Cadastro;