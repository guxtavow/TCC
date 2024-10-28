// FeedbackCard.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ArcElement, Tooltip, Legend, Chart } from 'chart.js'; // Adicione Chart aqui
import { Dropdown, Menu } from 'antd';

// Registre os elementos que você vai usar
Chart.register(ArcElement, Tooltip, Legend);

const FeedbackCard = () => {
  // Dados do gráfico de pizza
  const pieData = {
    labels: ['Completos', 'Em andamento', 'Não iniciado'],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ['#4CAF50', '#FFC107', '#FF5722'],
        borderWidth: 0,
      },
    ],
  };

  // Configurações do gráfico
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
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
    <div className="feedback-card" style={styles.cardContainer}>
      {/* Parte Superior: Gráfico de Pizza */}
      <div style={styles.pieContainer}>
        <h3 style={styles.title}>Análise de Jogos</h3>
        <Pie data={pieData} options={pieOptions} />
      </div>

      {/* Parte Inferior: Filtro de Data e Contadores */}
      <div style={styles.statsContainer}>
        <Dropdown overlay={dateMenu} placement="bottomLeft">
          <button style={styles.dropdownButton}>Selecionar Data</button>
        </Dropdown>
        <div style={styles.counts}>
          <p>Jogos Concluídos: <strong>30</strong></p>
          <p>Jogos em andamento: <strong>20</strong></p>
          <p>Jogos iniciados: <strong>50</strong></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: '#1B1B1B',
    padding: '20px',
    borderRadius: '10px',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  pieContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: '10px',
  },
  statsContainer: {
    width: '100%',
    textAlign: 'center',
  },
  dropdownButton: {
    backgroundColor: '#333',
    color: '#FFFFFF',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  counts: {
    textAlign: 'left',
    color: '#8A8A8A',
  },
};

export default FeedbackCard;
