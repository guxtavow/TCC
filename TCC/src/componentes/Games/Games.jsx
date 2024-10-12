import React, { useState } from 'react'; // Importa React e useState para gerenciamento de estado
import './Games.css'; // Importa os estilos do CSS
import Controle from './controle.png'; // Importa ícones e imagens
import Lampada from './lampada1.png';
import Front from './Front.png';
import Back from './Back.png';
import Hack from './Hack.png';
import Devop from './Devop.png';
import Logica from './logica.png';
import Game from './gaming.png';
import Fire from './fire.png';
import LastDefault from './lastgame.png'; // Imagem padrão para o último jogo
import Player1 from './jogador1.png';
import Player2 from './jogador2.png';
import Player3 from './jogador3.png';
import Player4 from './jogador4.png';

const Games = () => {
    // Estado para armazenar o último jogo acessado
    const [lastGame, setLastGame] = useState({
        name: 'Nenhum jogo acessado', // Valor padrão do nome
        img: LastDefault, // Imagem padrão para o último jogo
    });

    // Estado para controle de "seguir" jogadores
    const [followed, setFollowed] = useState(Array(4).fill(false)); // Inicializa o estado para 4 jogadores

    // Função para alternar o estado de seguir
    const toggleFollow = (index) => {
        const newFollowed = [...followed]; // Cria uma cópia do estado atual
        newFollowed[index] = !newFollowed[index]; // Alterna o estado do jogador clicado
        setFollowed(newFollowed); // Atualiza o estado
    };

    // Função para atualizar o último jogo
    const updateLastGame = (name, img) => {
        setLastGame({ name, img }); // Atualiza o estado do último jogo
    };

    // Array de jogos disponíveis
    const games = [
        { name: 'Front End Gaming', img: Front },
        { name: 'Back End Gaming', img: Back },
        { name: 'Hacking Gaming', img: Hack },
        { name: 'Logica Gaming', img: Logica },
        { name: 'Devops Gaming', img: Devop },
        { name: 'Gaming', img: Game },
    ];

    // Array de jogadores
    const players = [
        { name: "Joao Silva", username: "@josilv", image: Player1 },
        { name: "Amanda Ferreira", username: "@amandaf", image: Player2 },
        { name: "Leonardo Santos", username: "@Leosantos", image: Player3 },
        { name: "Agata", username: "@agata", image: Player4 },
    ];

    return (
        <>
            <div className='Game'>
                <div className='TituloGames'>
                    {/* Imagem de controle e título */}
                    <img src={Controle} width={50} style={{ marginTop: '-25px' }} alt='robozinho' id='robo-title' />
                    <span id='titleP'>Jogue Aprendendo</span>
                    <img src={Lampada} width={50} style={{ marginTop: '-20px' }} alt='ideia' id='lampada-title' />
                    <br />
                    <span id='titleP2'>Sua interface onde você joga e aprende</span>
                </div>
            </div>

            <section className="games">
                <h2>Todos os Jogos<img src={Fire} alt="All Games" /></h2>
                <div className="games-container">
                    <div className="games-grid">
                        {/* Mapeia os jogos disponíveis e renderiza os cards */}
                        {games.map((game, index) => (
                            <div
                                className="game-card"
                                key={index}
                                onClick={() => updateLastGame(game.name, game.img)} // Atualiza o último jogo ao clicar
                            >
                                <img src={game.img} alt={game.name} />
                                <p>{game.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="last-game">
                        <h3>Último Jogo:</h3>
                        <img src={lastGame.img} alt={lastGame.name} />
                        <p>{lastGame.name}</p>
                    </div>
                </div>

                <div className="top-jogadores">
                    <div className="top-jogadores-card"> {/* Card para Top Jogadores */}
                        <div className="top-jogadores-header">
                            <h3>Top Jogadores</h3>
                            <span className="mostrar-tudo">Mostrar Tudo</span> {/* Link para mostrar todos os jogadores */}
                        </div>
                        <div className="top-jogadores-profiles">
                            {/* Mapeia os jogadores e renderiza os perfis */}
                            {players.map((player, index) => (
                                <div className="profile-card" key={index}>
                                    <div className="profile-pic" style={{ backgroundImage: `url(${player.image})` }}></div>
                                    <div className="profile-info">
                                        <p className="profile-name">{player.name}</p>
                                        <p className="profile-username">{player.username}</p>
                                    </div>
                                    <button
                                        className={`follow-btn ${followed[index] ? 'following' : ''}`} // Adiciona classe 'following' se o jogador for seguido
                                        onClick={() => toggleFollow(index)} // Alterna o estado de seguir ao clicar
                                    >
                                        {followed[index] ? 'Following' : 'Follow'} {/* Exibe o texto do botão baseado no estado */}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Games; // Exporta o componente
