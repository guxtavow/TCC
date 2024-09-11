import React from 'react';
import { FaCode, FaDatabase, FaShieldAlt, FaBrain } from 'react-icons/fa';

import menina from './girl_note.png';
import meninaTablet from './girl_tablet.png';
import checkIcon from './checkIcon.png';

import './Home.css'

export default function Home(){
    //Cons --- DIV 1
    const handleClick = () => {
        alert('Botão clicado!');
    };

return (
<>
{/* --- DIV 1 --- */}
<div className="container">
    <div className="left">
        <h1>Conexão de Conhecimento
            Abra a porta para o futuro</h1>
        <p>Bem-vindo ao TechKids, seu assistente de estudos de tecnologia! Aqui, aprender é divertido. 
            Vamos juntos descobrir o fascinante mundo da tecnologia. Pronto para a aventura?</p>
        <button onClick={handleClick}>Vamos Lá!</button>
    </div>
    <div className="right">
        <img src={menina} alt="Imagem do TCC" />
    </div>
</div>

{/* --- DIV 2 --- */}
<div className="container2">
      <div className="header">
        <h1>Podemos aprender sobre diversas áreas de tecnologia</h1>
        <p>Diversas aulas e dicas através de nossa IA para várias áreas de tecnologia de maneira divertida e dinâmica</p>
      </div>
      <div className="buttonsDiv2">
        <button className="buttonDiv2" onClick={() => handleClick('/front')}>
          <FaCode className="buttonIcon" /> Front End
        </button>
        <button className="buttonDiv2" onClick={() => handleClick('/back')}>
          <FaDatabase className="buttonIcon" /> Back End
        </button>
        <button className="buttonDiv2" onClick={() => handleClick('/hacking')}>
          <FaShieldAlt className="buttonIcon" /> Hacking
        </button>
        <button className="buttonDiv2" onClick={() => handleClick('/logica')}>
          <FaBrain className="buttonIcon" /> Lógica
        </button>
      </div>
</div>

{/* --- DIV 3 --- */}
<div className="container3">
    <div className="content">
        <div className="image-section">
            <img src={meninaTablet} alt="Imagem do TCC" />
        </div>
        <div className="text-section">
            <h1>O que seu filho vai ganhar depois de estudar e se divertir no Techkids?</h1>
            <ul>
                <li><img src={checkIcon} alt="Check" /> Conhecimento basicos ao avançado em Programação</li>
                <li><img src={checkIcon} alt="Check" /> A capacidade de criticar o conhecimento aumenta</li>
                <li><img src={checkIcon} alt="Check" /> Irá lidar com diversos</li>
            </ul>
        </div>
        </div>
    </div>

{/* --- DIV 4 --- */}

</>
)
}

