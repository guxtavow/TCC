import React from 'react';
import './indicadores.css';

// Importe as imagens dos ícones
import atividadesIcon from './elements/atividades.png';
import concluidosIcon from './elements/concluidos.png';
import desempenhoIcon from './elements/desempenho.png';

// Componente Card
const Card = ({ title, value, linkText, linkUrl, icon }) => (
  <div className="indicator-card"> {/* Mova a classe aqui para o card */}
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
    { title: "Quantidades de Atividades", value: "50", linkText: "Ver Atividades", linkUrl: "#", icon: atividadesIcon },
    { title: "Atividades Concluídas", value: "25", linkText: "Ver Atividades", linkUrl: "#", icon: concluidosIcon },
    { title: "Desempenho", value: "50%", linkText: "Ver Desempenho", linkUrl: "#", icon: desempenhoIcon },
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
          />
        ))}
      </div>
    </div>
  );
}
