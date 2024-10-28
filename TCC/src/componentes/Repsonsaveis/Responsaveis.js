import React, { useState } from 'react'; // Adicione useState
import './Responsaveis.css';
import leftImage from './elements/imagem1.png';
import rightImage from './elements/imagem2.png';
import atividades from './elements/quantidades.png';
import concluidas from './elements/concluidos.png';
import desempenho from './elements/desempenho.png';
import Calendar from './Calendar/Calendar';

import PerguntasGrafico from './PerguntasGrafico/PerguntasGrafico';
import perguntasImage from './elements/perguntas.png';

export default function Responsaveis() {
  const [ano, setAno] = useState('2024'); // Mova o estado para dentro do componente

  const handleDownload = () => {
    alert('Baixar gráfico em Excel (implementar essa funcionalidade)');
  };

  return (
    <div className="responsible-container">
      <div className="performance-indicator">
        <div className="header-content">
          <img src={leftImage} alt="Left" className="left-image" />
          <h3>Indicador de Desempenho</h3>
          <img src={rightImage} alt="Right" className="right-image" />
        </div>
        <p>
          Acompanhe o desempenho do seu filho(a)/aluno de maneira intuitiva e dinâmica! <br />
          Aqui você irá acompanhar o perfil do filho(a)/aluno e seu desenvolvimento utilizando nossa plataforma.<br />
          E também poderá editar preferências do perfil.
        </p>
      </div>

      <div className="dashboard">
        <div className="grid-container">
          <div className="indicator-card card-1">
            <div className="card-content">
              <div className="card-text">
                <h3>Quandidade de Atividades</h3>
                <p>50</p>
                <a href="#">Ver Aividades</a>
              </div>
              <img src={atividades} alt="Quantidades" className="card-icon" />
            </div>
          </div>

          <div className="indicator-card card-2">
            <div className="card-content">
              <div className="card-text">
                <h3>Atividades Concluídas</h3>
                <p>25</p>
                <a href="#">Ver Atividades</a>
              </div>
              <img src={concluidas} alt="Concluídas" className="card-icon" />
            </div>
          </div>
        
          <div className="indicator-card card-3">
            <div className="card-content">
              <div className="card-text">
                <h3>Desempenho</h3>
                <p>50%</p>
                <a href="#">Ver Desempenho</a>
              </div>
              <img src={desempenho} alt="Desempenho" className="card-icon" />
            </div>
          </div>

          {/*Estrutura do Card 4*/}
          <div className="indicator-card card-4">
            <div className="left-side">
              <PerguntasGrafico />
            </div>
            <div className="right-side">
              <div className="dropdown">
              <select id="ano" value={ano} onChange={(e) => setAno(e.target.value)} className="year-button">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
                <button onClick={handleDownload} className="download-button">Baixar Gráfico</button>
              </div>
              <img src={perguntasImage} alt="Perguntas" className="perguntas-image" />
            </div>
          </div>

          <div className="indicator-card card-5">
            <Calendar /> {/* Integrando o componente Calendar */}
          </div>

          <div className="indicator-card card-6">
            <h3>Dúvidas</h3>
            <p>5</p>
            <a href="#">Ver todas</a>
          </div>

          <div className="indicator-card card-7">
            <div className="card-content">
              <div className="card-text">
                <h3>Editar Perfil</h3>
                <a href="#">Editar</a>
              </div>
              <img src={perguntasImage} alt="Editar Perfil" className="card-icon" />
            </div>
          </div>

          <div className="indicator-card card-8">
            <div className="card-content">
              <div className="card-text">
                <h3>Adicionar Perfil</h3>
                <a href="#">Adicionar</a>
              </div>
              <img src={perguntasImage} alt="Adicionar Perfil" className="card-icon" />
            </div>
          </div>

          <div className="vertical-card">
            <h3>Feedback</h3>
            <p>Sugestões e mais</p>
          </div>
        </div>
      </div>
    </div>
  );
}
