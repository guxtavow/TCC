import './chat.css'
import Robo from './robo.png'
import Lampada from './lampada.png'
import Robochat from './robozinho.png'
import { useEffect, useState } from 'react'
import RobochatLamp from './Robô.png'


export default function Chatbot(){

    const [darkMode,setDarkMode] = useState(false)

    useEffect(() =>{
        const dark = document.querySelector('body');

        if (dark) {
            // Cria um MutationObserver para monitorar alterações nas classes
            const observador = new MutationObserver(() => {
              // Verifica se o elemento tem a classe desejada
              if (dark.classList.contains('dark-mode')) {
                setDarkMode(true);
              } else {
                setDarkMode(false);
              }
            })
            // Inicia a observação de mudanças de atributos (como classes)
            observador.observe(dark, { attributes: true })      
          }
        }, [])


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

                <div className='TextoChat'>
                        <div className='sobreChat'>{/* INFOS SOBRE O CHAT */}
                            <h2 id='titleChat'>Olá! Eu sou o TechBot!</h2>
                            <p id='textChat'>Seu assistente virtual especializado em tecnologia! Estou aqui para ajudar você a aprender sobre tecnologia e programação de uma forma divertida e interativa. 
                                Vamos explorar o mundo da tecnologia juntos?</p>
                        </div>
                </div>

                <div className='Chatbot'>{/* ROBOZINHO COM CHATBOT NA BARRIGA */}
                    {darkMode ? <img src={RobochatLamp} alt='robochat' id='robochatlamp' width={1400} />   :  <img src={Robochat} alt='robochat' id='robochat' width={1400} />  }
                </div>
            </div>
    
        </>
    )
}