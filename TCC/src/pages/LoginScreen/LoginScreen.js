import React, { useState } from "react";
import './LoginScreen.css'; // Importa o CSS para estilização do componente
import logo from "./elements/login.png"; // Importa a imagem do logo
import GoogleIcon from "./elements/abelha.png"; // Importa o ícone da abelha
import ApiLogin from "../../services/LoginApi.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginScreen = () => {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const LoginUsuario = async (e) => {
        e.preventDefault();
        const response = await ApiLogin(email, senha);
        console.log(response);

            if (response.logado === true) {
                alert("Login bem sucedido!");
                localStorage.setItem("logado", "true"); // Use "isLoggedIn" como chave
                window.location.href = "/Home";
            } else {
                setError("Email ou senha incorretos");
            }
        }
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };
    
    return (
            <div>
                <form>
                    <h1 className="NomeSite">
                        TechKids
                        <img src={GoogleIcon} alt="Ícone da abelha" className="bee-icon3" />
                    </h1>
                    <img src={logo} alt="Logo" id="Logo" />
    
                    <button className="Conta" type="button"><a href="/CadastroProf">Criar Conta</a></button>
    
                    <h2 className="logue">Logue-se agora</h2>
                    
                    <h5 className="e-mail">E-mail</h5>
                    <div className="input-boxlg">
                        <input 
                            type="text" 
                            placeholder="Insira seu e-mail" 
                            required 
                        />
                    </div>
                    
                    <h6 className="pass">Senha</h6>
                    <div className="input-boxlg">
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
                    
                    <button className="login" type="submit">Login</button>
                    
                    <div className="register-link">
                        <p>Não é registrado? Clique no botão Criar Conta</p>
                    </div>
                </form>
            </div>
        );
    };

export default LoginScreen;