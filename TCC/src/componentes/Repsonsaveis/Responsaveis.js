import React from 'react';
import './Responsaveis.css';
import leftImage from './elements/imagem1.png';
import rightImage from './elements/imagem2.png';

export default function Responsaveis() {
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
            <h3>Atividades</h3>
            <p>12</p>
            <a href="#">Ver mais</a>
          </div>
          <div className="indicator-card card-2">
            <h3>Concluídas</h3>
            <p>8</p>
            <a href="#">Ver mais</a>
          </div>
          <div className="indicator-card card-3">
            <h3>Desempenho</h3>
            <p>85%</p>
            <a href="#">Ver mais</a>
          </div>

          <div className="indicator-card card-4">
            <h3>Perguntas Respondidas</h3>
            <p>150</p>
            <a href="#">Ver mais</a>
          </div>
          <div className="indicator-card card-5">
            <h3>Calendário</h3>
            <p>Próximos eventos</p>
            <a href="#">Acessar</a>
          </div>

          <div className="indicator-card card-6">
            <h3>Dúvidas</h3>
            <p>5</p>
            <a href="#">Ver todas</a>
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
