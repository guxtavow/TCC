// Importa o arquivo CSS que contém os estilos da página
import './vantagens.css';

// Importa as imagens que serão usadas no componente
import Menino from './pensador.png'; // Imagem do menino tendo uma ideia
import Como from './como.png'; // Imagem do "Como Funciona?"
import Menina from './menina.png'; // Imagem da menina
import Bandeiras from './bandeiras.png'; // Imagem da primeira bandeira
import { FaCheckCircle } from "react-icons/fa"; // Importa o ícone de check-circle

// Cria um componente chamado Vantagens
export default function Vantagens() {
    return (
        <div className='Vantagens'>
            <div className='Banner'>
            </div>
            <img src={Menino} alt='Menino pensativo' id='garoto1' style={{ width: '400px'}} />
            <img src={Como} alt='Como Funciona?' id='como' style={{ width: '500px' }} />

            <p className='text1'>
                O TechBot, nosso chatbot inteligente, está preparado para responder exclusivamente a perguntas relacionadas à tecnologia. 
                Ele foi criado com o objetivo de ajudar as crianças a aprender, respondendo 
                de uma maneira simples e clara, para que elas possam entender facilmente. 
                O TechBot foi programado para fornecer respostas educativas e apropriadas, sempre adaptadas à faixa etária da criança.
            </p>
            <p className='text1'>
                Além disso, o TECHKIDS também oferece jogos educativos focados em tecnologia, 
                permitindo que as crianças aprendam enquanto brincam, de forma interativa e divertida.
            </p>

            <div className='Bandeiras'>
                <img src={Bandeiras} alt='Bandeiras' id='ban1' style={{width: '1300px'}} />
            </div>

            <div className="Recompensa">
                <img src={Menina} alt='Menina' id='menina' />
                <div className="text2">
                    <h2><b>O que seu filho vai ganhar depois de estudar e se divertir no Techkids?</b></h2>
                    <div className="vantagens-list">
                        <p className="texto"><FaCheckCircle /> <b> Raciocínio lógico </b>: Resolver desafios de programação aprimora o pensamento crítico.</p>
                        <p className="texto"><FaCheckCircle /> <b> Criatividade</b>: Aprender a criar e inovar no mundo digital.</p>
                        <p className="texto"><FaCheckCircle /> <b>Confiança na tecnologia</b>: Familiarização com conceitos essenciais para o futuro.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
