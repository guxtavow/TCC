import React from "react";
import './LoginScreen.css';
import { FcGoogle } from "react-icons/fc";
import logo from "./img/login.png"

const LoginScreen = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>TechKids</h1>
                <img src={logo} alt="foto" title="foto"/>
                <button className="Conta" type="submit">Criar Conta</button>
                <h2>Logue-se agora</h2>
                <h3>Olá, Bem-vindo de volta!</h3>
                <button type="submit">
                    <FcGoogle className="icon" /> Login with Google
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
                Ou Logue-se com o E-mail
                </span>
                <div style={{ 
                    flex: 0.13, 
                    borderBottom: '1px solid black' 
                    }} />
                </div>
                <h5>Email</h5>
                <div className="input-box">
                    <input type="text" 
                    placeholder="Insira seu e-mail" required />
                </div>
                <h6>Password</h6>
                <div className="input-box">
                    <input type="password" 
                    placeholder="Entre com sua senha" required />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Lembrar Senha</label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Não é registrado? Clique no botão Criar Conta</p>
                </div>
            </form>
        </div>
    );
};

export default LoginScreen;