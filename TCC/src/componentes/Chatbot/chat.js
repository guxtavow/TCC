import './chat.css'
import Robo from './robo.png'
import Lampada from './lampada.png'
import Robochat from './robozinho.png'


export default function Chatbot(){



    return(
        <>
            <div className='Chat'> {/* PAGINA DO CHATBOT NO GERAL */}
                <div className='TituloChat'>
                    <img src={Robo} width={50} 
                    style={{
                        marginTop:'-25px',
                    }} 
                    alt='robozinho' id='robo-title'/>
                      <span id='titleP'>Pergunte ao TechBot</span>
                    <img src={Lampada} width={50}
                    style={{
                        marginTop:'-20px',
                    }} 
                    alt='ideia' id='lampada-title'/>
                    <br />
                        <span id='titleP2'>Seu assistente tecnólogico para aprender brincando!</span>
                </div>

                <div className='Chatbot'>{/* ROBOZINHO COM CHATBOT NA BARRIGA */}
                    <img src={Robochat} alt='robochat' id='robochat' width={1400} /> {/* FUNDO CHAT */}
                    <div className='TextoChat'>
                        <div className='sobreChat'>{/* INFOS SOBRE O CHAT */}
                            <h2 id='titleChat'>Olá! Eu sou o TechBot!</h2>
                            <p id='textChat'>Seu assistente virtual especializado em tecnologia! Estou aqui para ajudar você a aprender sobre tecnologia e programação de uma forma divertida e interativa. 
                                Vamos explorar o mundo da tecnologia juntos?</p>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )
}