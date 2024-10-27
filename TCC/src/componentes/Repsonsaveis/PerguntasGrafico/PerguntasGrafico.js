// PerguntasGrafico.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './PerguntasGrafico.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PerguntasGrafico = () => {
  const data = {
    labels: ['MySQL', 'Java', 'Python'],
    datasets: [
      {
        label: 'Linguagens',
        data: [50, 30, 5],
        backgroundColor: ['#505050', '#949498', '#1C1C1C'], // Cores específicas para cada tipo de pergunta
        borderRadius: 8, // Arredondamento das barras
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#000000', // Cor dos números no gráfico
        },
      },
      title: {
        display: true,
        text: 'Linguagens mais utilizadas',
        align: 'start', // Alinhamento do título à esquerda
        color: 'white', // Cor do título
        font: {
          size: 18, // Tamanho equivalente a h3
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove as linhas de grade no eixo X
        },
        ticks: {
          color: '#000000', // Cor das etiquetas do eixo X (MySQL, Java, Python)
        },
      },
      y: {
        grid: {
          display: false, // Remove as linhas de grade no eixo Y
        },
        ticks: {
          color: '#000000', // Cor dos números no eixo Y
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PerguntasGrafico;
