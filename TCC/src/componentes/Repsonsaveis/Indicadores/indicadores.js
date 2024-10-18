import React from 'react';
import './indicadores.css';  // Certifique-se de importar seu CSS

// Função para representar um card
function Card({ title, value, linkText, icon, className }) {
  return (
    <div className={`indicator-card ${className}`}>
      <div className="card-details">
        <h3>{title}</h3>
        <p>{value}</p>
        {linkText && <a href="#">{linkText}</a>}
      </div>
      {icon && <img src={icon} alt="" className="card-icon" />}
    </div>
  );
}

export default function indicadores() {
  return (
    <div className="indicators-page">
      {/* Primeira Fileira */}
      <div className="first-row">
        <Card title="Quantidades de Atividades" value="50" linkText="Ver Atividades" className="card-1" />
        <Card title="Atividades Concluídas" value="25" linkText="Ver Atividades" className="card-2" />
        <Card title="Desempenho" value="50%" linkText="Ver Desempenho" className="card-3" />
      </div>

      {/* Segunda Fileira */}
      <div className="second-row">
        <Card title="Perguntas Respondidas" value="40" linkText="Ver Perguntas" className="card-4" />
        <Card title="Calendário" value="Jan 2024" linkText="Ver Calendário" className="card-5" />
      </div>

      {/* Terceira Fileira */}
      <div className="third-row">
        <Card title="Dúvidas" value="Em análise" linkText="Ver Dúvidas" className="card-6" />
      </div>

      {/* Quarta Fileira */}
      <div className="fourth-row">
        <Card title="Editar Perfil" value="" linkText="Editar" className="card-7" />
        <Card title="Adicionar Filhos" value="" linkText="Adicionar" className="card-8" />
      </div>

      {/* Feedback Card - ao lado direito */}
      <div className="feedback">
        <div className="feedback-card">Feedback</div>
      </div>
    </div>
  );
}
