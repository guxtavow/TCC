import './Games.css';
import Controle from './controle.png';
import Lampada from './lampada1.png';
import Jogo from './elden.png';
import Fire from './fire.png';
import Player1 from './jogador1.png';
import Player2 from './jogador2.png';
import Player3 from './jogador3.png';
import Player4 from './jogador4.png';
import React, { useState } from 'react'; // Importe o React e useState

const Games = () => {
    const [followed, setFollowed] = useState(Array(4).fill(false)); // Atualizado para 4 jogadores

    const toggleFollow = (index) => {
        const newFollowed = [...followed];
        newFollowed[index] = !newFollowed[index];
        setFollowed(newFollowed);
    };

    // Dados dos jogadores
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
                    <img src={Controle} width={50} style={{ marginTop: '-25px' }} alt='robozinho' id='robo-title' />
                    <span id='titleP'>Jogue Aprendendo</span>
                    <img src={Lampada} width={50} style={{ marginTop: '-20px' }} alt='ideia' id='lampada-title' />
                    <br />
                    <span id='titleP2'>Sua interface onde você joga e aprende</span>
                </div>
            </div>

            <section className="games">
                <h2>Todos os Jogos<img src={Fire} alt="Elden Ring" /></h2>
                <div className="games-container">
                    <div className="games-grid">
                        <div className="game-card" onClick={() => alert('Game 1 clicked!')}>
                            <img src={Jogo} alt="Elden Ring" />
                            <p>Front End Gaming</p>
                        </div>
                        <div className="game-card" onClick={() => alert('Game 2 clicked!')}>
                            <img src={Jogo} alt="Elden Ring" />
                            <p>Back End Gaming</p>
                        </div>
                        <div className="game-card" onClick={() => alert('Game 3 clicked!')}>
                            <img src={Jogo} alt="Elden Ring" />
                            <p>Hacking Gaming</p>
                        </div>
                        <div className="game-card" onClick={() => alert('Game 4 clicked!')}>
                            <img src={Jogo} alt="Elden Ring" />
                            <p>Logica Gaming</p>
                        </div>
                        <div className="game-card" onClick={() => alert('Game 5 clicked!')}>
                            <img src={Jogo} alt="Elden Ring" />
                            <p>Devops Gaming</p>
                        </div>
                        <div className="game-card" onClick={() => alert('Game 6 clicked!')}>
                            <img src={Jogo} alt="Elden Ring" />
                            <p>Gaming</p>
                        </div>
                    </div>

                    <div className="last-game" onClick={() => alert('Last Game clicked!')}>
                        <h3>Último Jogo:</h3>
                        <img src={Jogo} alt="Elden Ring" />
                    </div>
                </div>

                <div className="top-jogadores">
                    <div className="top-jogadores-card"> {/* Card para Top Jogadores */}
                        <div className="top-jogadores-header">
                            <h3>Top Jogadores</h3>
                            <span className="mostrar-tudo">Mostrar Tudo</span>
                        </div>
                        <div className="top-jogadores-profiles">
                            {players.map((player, index) => (
                                <div className="profile-card" key={index}>
                                    <div className="profile-pic" style={{ backgroundImage: `url(${player.image})` }}></div>
                                    <div className="profile-info">
                                        <p className="profile-name">{player.name}</p>
                                        <p className="profile-username">{player.username}</p>
                                    </div>
                                    <button
                                        className={`follow-btn ${followed[index] ? 'following' : ''}`}
                                        onClick={() => toggleFollow(index)}
                                    >
                                        {followed[index] ? 'Following' : 'Follow'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Games;
