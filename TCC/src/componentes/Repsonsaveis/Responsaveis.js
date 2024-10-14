import React from 'react';
import Indicators from './Indicadores/indicadores';
import './Responsaveis.css';

import leftImage from './elements/imagem1.png';
import rightImage from './elements/imagem2.png';

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
          Acompanhe o desempenho do seu filho(a)/aluno de maneira intuitiva e dinâmica! <br/>
          Aqui você irá acompanhar o perfil do filho(a)/aluno e seu desenvolvimento utilizando nossa plataforma.<br/>
          E também poderá editar preferências do perfil.
        </p>
      </div>

      <Indicators/>
    </>
  );
}
