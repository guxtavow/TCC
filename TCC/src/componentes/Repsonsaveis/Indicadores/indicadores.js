import React from 'react';
import './indicadores.css';

// Importe as imagens dos ícones
import atividadesIcon from './elements/atividades.png';
import concluidosIcon from './elements/concluidos.png';
import desempenhoIcon from './elements/desempenho.png';

// Componente Card
const Card = ({ title, value, linkText, linkUrl, icon, className }) => (
  <div className={`indicator-card ${className}`}> {/* A classe agora inclui a className */}
    <div className="card-details">
      <h3>{title}</h3>
      <p>{value}</p>
      <a href={linkUrl}>{linkText}</a>
    </div>
    <img src={icon} alt={`${title} icon`} className="card-icon" /> {/* Imagem à direita */}
  </div>
);

export default function Indicators() {
  const indicatorsData = [
    { title: "Quantidades de Atividades", value: "50", linkText: "Ver Atividades", linkUrl: "#", icon: atividadesIcon, className: "card-1" },
    { title: "Atividades Concluídas", value: "25", linkText: "Ver Atividades", linkUrl: "#", icon: concluidosIcon, className: "card-2" },
    { title: "Desempenho", value: "50%", linkText: "Ver Desempenho", linkUrl: "#", icon: desempenhoIcon, className: "card-3" },
  ];
  
  return (
    <div className="indicators-page">
      <h2>Indicadores de Desempenho</h2>
      <div className="indicators-container">
        {indicatorsData.map((indicator, index) => (
          <Card
            key={index}
            title={indicator.title}
            value={indicator.value}
            linkText={indicator.linkText}
            linkUrl={indicator.linkUrl}
            icon={indicator.icon}
            className={indicator.className} // Adicionada a className
          />
        ))}
      </div>
    </div>
  );
}
