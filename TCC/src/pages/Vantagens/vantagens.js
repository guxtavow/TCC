// Importa o arquivo CSS e imagens
import './vantagens.css';
import Menino from './elements/pensador.png';
import Como from './elements/como.png';
import Menina from './elements/menina.png';
import Bandeiras from './elements/bandeiras.png';
import { FaCheckCircle } from "react-icons/fa"; 

// Componente Vantagens
export default function Vantagens() {
    return (
        <div className='Vantagens'>
            <div className='Banner' />
            <img src={Menino} alt='Menino pensativo' id='garoto2' />
            <img src={Como} alt='Como Funciona?' id='como' />

            <p className='text3'>
                O TechBot, nosso chatbot inteligente, está preparado para responder exclusivamente a perguntas relacionadas à tecnologia. 
                Ele foi criado para ajudar as crianças a aprender, respondendo de forma simples e clara, para que possam entender facilmente. 
                O TechBot fornece respostas educativas e apropriadas, sempre adaptadas à faixa etária da criança.
                
            </p>
            <p className='text3'>
            Além disso, o TECHKIDS também oferece jogos educativos focados em tecnologia, 
            permitindo que as crianças aprendam enquanto brincam de forma interativa e divertida.
            </p>

            <div className='Bandeiras'>
                <img src={Bandeiras} alt='Bandeiras' id='ban1' />
            </div>

            <div className="Recompensa">
                <img src={Menina} alt='Menina' id='menina1' />
                <div className="text4">
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
