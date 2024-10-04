  import React from 'react';
  import './Home.css';

  import imagem1 from './elements/imagem1.png';
  import btnCadastro from './elements/btn-cad.png';
  import btnEntrar from './elements/btn-entrar.png';
  import imagem2 from './elements/imagem2.png';
  import imagemCard1 from './elements/teacher.png';
  import imagemCard2 from './elements/book.png';
  import imagemCard3 from './elements/pig.png';
  import imagem4 from './elements/imagem3.png';

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
                <button className="action-button" aria-label="Cadastro">
                  <img src={btnCadastro} alt="Botão Cadastro" className="button-icon" />
                  <strong>Cadastro</strong>
                </button>
                <button className="action-button" aria-label="Entrar">
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
            <h3><strong>Por que você deve escolher o Techkids?</strong></h3>
            
            <div className="cards-container">
              {/* Card 1 */}
              <div className="card">
                <img src={imagemCard1} alt="Card 1" />
                <p><strong>Experiencia do Aluno</strong></p>
                <p>
                  Cada criança é uma exploradora em uma jornada tecnológica emocionante! 
                  Nossa interface amigável e conteúdo interativo tornam o aprendizado uma experiência incrível
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="card">
                <img src={imagemCard2} alt="Card 2" />
                <p><strong>Programa Criativo</strong></p>
                <p>
                  Simples de mexer, dinamico e com jogos de aprendizagem a tecnologia, onde estudar fica divertido.
                </p>
              </div>

              {/* Card 3 */}
              <div className="card">
                <img src={imagemCard3} alt="Card 3" />
                <p><strong>Sem custos</strong></p>
                <p>
                  Nosso site de estudos de tecnologia para crianças é totalmente gratuita. 
                  Aprenda, divirta-se e mergulhe no mundo da tecnologia sem custos.
                </p>
              </div>
            </div>
          </div>

          {/* Seção 4 */}
          <div className="section-content section4">
            <div className="image-content">
              <img src={imagem4} alt="Imagem ilustrativa" />
            </div>
            <div className="text-content">
              <p><strong>E como funciona?</strong></p>
              <p>
                Clique <a href="#">aqui</a> para descobrir como nosso site pode transformar o aprendizado 
                de programação em uma aventura divertida para crianças!
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }