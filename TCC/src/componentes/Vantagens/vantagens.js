// Importa o arquivo CSS que contém os estilos da página
import './vantagens.css';

// Importa as imagens que serão usadas no componente
import Menino from './pensador.png'; // Imagem do menino tendo uma idéia
import Como from './como.png'; // Imagem do "Como Funciona?"
import Menina from './menina.png'; // Imagem da menina
import Bandeira1 from './bandeira1.png'; // Imagem da primeira bandeira
import Bandeira2 from './bandeira2.png'; // Imagem da segunda bandeira
import Bandeira3 from './bandeira3.png'; // Imagem da terceira bandeira
import Bandeira4 from './bandeira4.png'; // Imagem da quarta bandeira
import Linha from './linha.png'; // Imagem da linha
import Formas from './formas.png'; // Imagem das formas
import { FaCheckCircle } from "react-icons/fa"; // Importa o ícone de check-circle

// Cria um componente chamado Vantagens
export default function Vantagens() {
    return (
        <div className='Vantagens'> {/* Div principal com a classe 'Vantagens' */}
            <div className='Banner'> {/* Div para a seção do Banner */}
                {/* Imagem do menino pensativo */}
                <img src={Menino} alt='img1' id='garoto1' width='400px' />
                {/* Imagem do "Como" */}
                <img src={Como} alt='img2' id='como' width='580px' />
            </div>

            <div>
                {/* Texto explicando o TechBot */}
                <p className='text1'>
                    O TechBot, nosso chatbot inteligente, está preparado para responder exclusivamente a perguntas relacionadas à tecnologia.
                    Ele foi criado com o objetivo de ajudar as crianças a aprender, respondendo de uma maneira simples e clara, para que elas possam entender facilmente.
                    O TechBot foi programado para fornecer respostas educativas e apropriadas, sempre adaptadas à faixa etária da criança.
                </p>
                {/* Texto sobre jogos educativos */}
                <p className='text1'>
                    Além disso, o TECHKIDS também oferece jogos educativos focados em tecnologia, permitindo que as crianças aprendam enquanto brincam, de forma interativa e divertida.
                </p>
                
                {/* Seção para as bandeiras e imagens */}
                <div className='Bandeiras'>
                    {/* Imagens das bandeiras */}
                    <img src={Bandeira1} alt='b1' id='ban1' width='300px' />
                    <img src={Bandeira2} alt='b2' id='ban2' width='300px' />
                    <img src={Bandeira3} alt='b3' id='ban3' width='300px' />
                    <img src={Bandeira4} alt='b4' id='ban4' width='300px' />
                    {/* Imagem da linha */}
                    <img src={Linha} alt='img4' id='linha' width='100px' />
                    {/* Imagem das formas */}
                    <img src={Formas} alt='img5' id='formas' width='100px' />
                </div>
                
                {/* Seção de Recompensa */}
                <div className="Recompensa">
                    {/* Imagem da menina */}
                    <img src={Menina} alt='img3' id='menina' width='500px' />
                    <div className="text2"> {/* Div para o texto da recompensa */}
                        {/* Título da seção */}
                        <h2><b>O que seu filho vai ganhar depois de estudar e se divertir no Techkids?</b></h2>
                        <br />
                        {/* Lista de vantagens com ícones */}
                        <p className="texto">
                            <FaCheckCircle /> {/* Ícone de check */}
                            <b> Raciocínio lógico </b>: Resolver desafios de programação aprimora o pensamento crítico.
                        </p>
                        <p className="texto">
                            <FaCheckCircle /> {/* Ícone de check */}
                            <b> Criatividade</b>: Aprender a criar e inovar no mundo digital.
                        </p>
                        <p className="texto">
                            <FaCheckCircle /> {/* Ícone de check */}
                            <b>Confiança na tecnologia</b>: Familiarização com conceitos essenciais para o futuro.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
