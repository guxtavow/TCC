import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ArcElement, Tooltip, Legend, Chart } from 'chart.js'; 
import { Dropdown, Menu } from 'antd';
import './FeedbackCard.css'; // Ajuste o caminho conforme necessário



// Registre os elementos que você vai usar
Chart.register(ArcElement, Tooltip, Legend);

const FeedbackCard = () => {
  // Dados do gráfico de pizza
  const pieData = {
    labels: ['Completos', 'Em andamento', 'Não iniciado'],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ['#3ABEFF', '#FF3C38', '#FFCF4D'], // Atualizadas as cores do gráfico
        borderWidth: 0,
      },
    ],
  };

  // Configurações do gráfico
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#FFFFFF', // Cor da legenda
          font: {
            size: 9, // Tamanho da fonte da legenda
          },
        },
      },
    },
  };

  // Menu para o dropdown de datas
  const dateMenu = (
    <Menu>
      <Menu.Item key="1">Última semana</Menu.Item>
      <Menu.Item key="2">Último mês</Menu.Item>
      <Menu.Item key="3">Último trimestre</Menu.Item>
    </Menu>
  );

  return (
    <div className="feedback-card">
      {/* Parte Superior: Gráfico de Pizza */}
      <div className="pie-container">
        <h3 className="title">Análise de Jogos</h3>
        <Pie data={pieData} options={pieOptions} />
      </div>

      {/* Parte Inferior: Filtro de Data e Contadores */}
      <div className="stats-container">
        <Dropdown overlay={dateMenu} placement="bottomLeft">
          <button className="dropdown-button">Selecionar Data</button>
        </Dropdown>
        <div className="counts">
          <p>Jogos Concluídos: <strong>30</strong></p>
          <p>Jogos em andamento: <strong>20</strong></p>
          <p>Jogos iniciados: <strong>50</strong></p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
