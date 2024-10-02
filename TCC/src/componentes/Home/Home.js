import React from 'react';
import './Home.css';

import imagem1 from './elements/imagem1.png';

export default function Home() {
  return (
    <div className="container">
      <main className="home-content">

        {/* Conteúdo da seção 1 */}
        <div className="section-content section1">
          <div className="text-content">
            <h3>Conexão de Conhecimento:</h3>
            <h3>Explorando a Tecnologia de Forma Divertida</h3>
            <p>
              Bem-vindo ao <strong>TechKids</strong>, seu assistente de estudos virtual! 
              Aqui, aprender é divertido, e juntos iremos descobrir o fascinante mundo da tecnologia. 
            </p>
          </div>
          <div className="image-content">
            <img src={imagem1} alt="Exemplo Seção 1" />
          </div>
        </div>

        {/* Conteúdo da seção 2 */}
        <div className="section-content section2">
          {/* Adicione conteúdo aqui */}
        </div>

        {/* Conteúdo da seção 3 */}
        <div className="section-content section3">
          {/* Adicione conteúdo aqui */}
        </div>

        {/* Conteúdo da seção 4 */}
        <div className="section-content section4">
          {/* Adicione conteúdo aqui */}
        </div>

      </main>
    </div>
  );
}
