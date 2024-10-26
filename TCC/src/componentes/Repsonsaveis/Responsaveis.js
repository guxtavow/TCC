import React from 'react';
import './Responsaveis.css';
import leftImage from './elements/imagem1.png';
import rightImage from './elements/imagem2.png';

import quantidadesIcon from './elements/quantidades.png';
import concluidosIcon from './elements/concluidos.png';
import desempenhoIcon from './elements/desempenho.png';


function Card({ title, value, linkText, icon, className }) {
  return (
<div className={`indicator-card ${className}`}>
      <div className="card-content">  {/* Wrapper flex para texto e imagem */}
        <div className="card-details">
          <h3>{title}</h3>
          <p>{value}</p>
          {linkText && <a href="#">{linkText}</a>}
        </div>
        {icon && <img src={icon} alt={`${title} icon`} className="card-icon" />} {/* Ícone à direita */}
      </div>
    </div>
  );
}

export default function Responsaveis() {
  return (
    <>
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

      {/* Conteúdo dos Indicadores */}
      <div className="indicators-page">
      <div className="first-row">
        <Card title="Quantidades de Atividades" value="50" linkText="Ver Atividades" icon={quantidadesIcon} className="card-1" />
        <Card title="Atividades Concluídas" value="25" linkText="Ver Atividades" icon={concluidosIcon} className="card-2" />
        <Card title="Desempenho" value="50%" linkText="Ver Desempenho" icon={desempenhoIcon} className="card-3" />
      </div>
        
        <div className="second-row">
          <Card title="Perguntas Respondidas" value="40" linkText="Ver Perguntas" className="card-4" />
          <Card title="Calendário" value="Jan 2024" linkText="Ver Calendário" className="card-5" />
        </div>

        <div className="third-row">
          <Card title="Dúvidas" value="Em análise" linkText="Ver Dúvidas" className="card-6" />
        </div>

        <div className="fourth-row">
          <Card title="Editar Perfil" value="" linkText="Editar" className="card-7" />
          <Card title="Adicionar Filhos" value="" linkText="Adicionar" className="card-8" />
        </div>

        <div className="feedback">
          <div className="feedback-card">Feedback</div>
        </div>
      </div>
    </>
  );
}
