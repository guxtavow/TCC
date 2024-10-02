import React from 'react';
import './Home.css';

import imagem1 from './elements/imagem1.png';
import btnCadastro from './elements/btn-cad.png';
import btnEntrar from './elements/btn-entrar.png';
import imagem2 from './elements/imagem2.png';


export default function Home() {
  return (
    <div className="container">
      <main className="home-content">
        
        {/* Seção 1 */}
        <div className="section-content section1">
          <div className="text-content">
            <h3>Conexão de Conhecimento:</h3>
            <h3>Explorando a Tecnologia de Forma Divertida</h3>
            <p>
              Bem-vindo ao TechKids, seu assistente de estudos virtual! 
              Aqui, aprender é divertido, e juntos iremos descobrir o fascinante mundo da tecnologia.
            </p>
          </div>
          <div className="image-content">
            <img src={imagem1} alt="IA" />
          </div>
        </div>

        {/* Seção 2 */}
        <div className="section-content section2">
          <div className="text-content">
            <p>Mas antes...</p>
            <p><strong>
              Acesse ou crie seu cadastro para acessar um conteúdo personalizado de acordo com o seu perfil:
            </strong></p>
            <div className="button-container">
              <button className="action-button">
                <img src={btnCadastro} alt="Botão Cadastro" className="button-icon" />
                <strong>Cadastro</strong>
              </button>
              <button className="action-button">
                <img src={btnEntrar} alt="Botão Entrar" className="button-icon" />
                <strong>Entrar</strong>
              </button>
            </div>
            <div className="speech-bubble">
              <h3><strong>
                Somos o TECHKIDS, <br/>
                um time apaixonado por tecnologia.
              </strong></h3>
              <p>
                Conheça o TechBot, nosso amigo virtual que responde suas dúvidas e 
                te guia no mundo digital. Além disso, temos jogos incríveis para tornar o 
                aprendizado ainda mais divertido!
                Quer saber mais? <a href="#">Clique aqui</a> para descobrir tudo sobre nós!
              </p>
            </div>
            <div className="image-below-bubble">
             <img src={imagem2} alt="Imagem TechBot" />
          </div>
          </div>
        </div>

        {/* Seção 3 */}
        <div className="section-content section3">
          {/* Adicione conteúdo aqui */}
        </div>

        {/* Seção 4 */}
        <div className="section-content section4">
          {/* Adicione conteúdo aqui */}
        </div>
      </main>
    </div>
  );
}
