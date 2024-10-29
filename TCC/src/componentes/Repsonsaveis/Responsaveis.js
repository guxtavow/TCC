import leftImage from './elements/imagem1.png'
import rightImage from './elements/imagem2.png'
import atividades from './elements/quantidades.png';
import concluidas from './elements/concluidos.png';
import desempenho from './elements/desempenho.png';
import perguntasImage from './elements/perguntas.png';
import perfil from './elements/perfil.png';
import filho from './elements/filho.png';
import duvidas from './elements/duvidas.png'
import Calendar from './Calendar/Calendar';
import PerguntasGrafico from './PerguntasGrafico/PerguntasGrafico';
import FeedbackCard from './Feedback/FeedbackCard';
import './Responsaveis.css';
import React, { useState } from 'react'; // Adicione useState

export default function Responsaveis() {
  const [ano, setAno] = useState('2024'); // Mova o estado para dentro do componente

  const handleDownload = () => {
    alert('Baixar gráfico em Excel (implementar essa funcionalidade)');
  };

  const [filter, setFilter] = useState(''); // Estado para o filtro

  const handleDownloadChat = () => {
    alert('Baixar histórico do chat (implementar essa funcionalidade)');
  };

  // Dados simulados para a tabela
  const chatHistory = [
    { id: 1, aluno: 'Ariel B.P.', date: '2024-10-01', duvida: 'Como acessar o material?' },
    { id: 2, aluno: 'Danilo N.D.', date: '2024-10-02', duvida: 'Quando é a próxima prova?' },
    { id: 3, aluno: 'Eduardo S.S.', date: '2024-10-03', duvida: 'Posso recuperar a nota?' },
    { id: 4, aluno: 'Gustavo A.A.', date: '2024-10-04', duvida: 'Quando é a próxima prova?' },
    { id: 5, aluno: 'Jaqueline C.M.', date: '2024-10-05', duvida: 'Posso recuperar a nota?' },
  ];
  
  // Lista de alunos para o filtro
  const alunos = [
    { id: 1, nome: 'Ariel B.P.' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Pedro Santos' },
    { id: 4, nome: 'Danilo N.D.' },
    { id: 5, nome: 'Eduardo S.S.' },
    { id: 6, nome: 'Gustavo A.A.' },
    { id: 7, nome: 'Jaqueline C.M.' },
  ];

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
            <div className="chat-history">
              <div className="chat-header">
                <h3 className="historico-chat">Histórico do chat</h3>
                <div className="chat-filters">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="filter-dropdown"
                  >
                    <option value="">Todos</option>
                    {alunos.map(aluno => (
                      <option key={aluno.id} value={aluno.nome}>{aluno.nome}</option>
                    ))}
                  </select>
                  <button onClick={handleDownloadChat} className="download-button">Baixar</button>
                </div>
              </div>
              <table className="chat-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Aluno</th>
                    <th>Date</th>
                    <th>Dúvida</th>
                  </tr>
                </thead>
                <tbody>
                  {chatHistory
                    .filter(chat => filter === "" || chat.aluno.includes(filter)) // Filtrando com base na seleção do dropdown
                    .map(chat => (
                      <tr key={chat.id}>
                        <td>{chat.id}</td>
                        <td>{chat.aluno}</td>
                        <td>{chat.date}</td>
                        <td>{chat.duvida}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


          <div className="indicator-card card-7">
            <div className="card-content">
              <div className="card-text">
                <h3>Editar Perfil</h3>
                <a href="#">Editar</a>
              </div>
              <img src={perfil} alt="Editar Perfil" className="card-icon" />
            </div>
          </div>

          <div className="indicator-card card-8">
            <div className="card-content">
              <div className="card-text">
                <h3>Adicionar Perfil</h3>
                <a href="#">Adicionar</a>
              </div>
              <img src={filho} alt="Adicionar Perfil" className="card-icon" />
            </div>
          </div>

          {/* Novo Card 9 */}
          <div className="indicator-card card-9">
            <div className="card-content">
              <div className="card-text">
                <h3>Dúvidas</h3>
                <a href="#">Ver dúvidas</a>
              </div>
              <img src={duvidas} alt="Duvidas" className="card-icon" />
            </div>
          </div>

          <div className="vertical-card">
            <FeedbackCard />
          </div>
        </div>
      </div>
    </div>
  );
}
