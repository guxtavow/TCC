import React, { useState } from "react";
import './LoginScreen.css';
import logo from "./img/login.png";
import GoogleIcon from "./img/abelha.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>
                    TechKids
                    <img src={GoogleIcon} alt="Ícone da abelha" className="bee-icon" />
                </h1>
                <img src={logo} alt="Logo da aplicação" title="Logo da aplicação" />
                <button className="Conta" type="submit">Criar Conta</button>
                <h2>Logue-se agora</h2>
                
                <h5>E-mail</h5>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Insira seu e-mail" 
                        required 
                    />
                </div>
                
                <h6>Senha</h6>
                <div className="input-box" style={{ position: "relative" }}>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Entre com sua senha" 
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
                
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Lembrar Senha
                    </label>
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