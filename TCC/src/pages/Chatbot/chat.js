import './chat.css'
import Robo from './elements/robo.png'
import Lampada from './elements/lampada.png'
import Robochat from './elements/robozinho.png'
import { useEffect, useState } from 'react'
import RobochatLamp from './elements/Robô.png'
import { RespostaChat } from '../../services/apichatbot'



export default function Chatbot(){

    const [darkMode,setDarkMode] = useState(false)
    const [inputMessage, setInputMessage] = useState('')
    const [chatMessages, setChatMessages] = useState([])
    const refresh = [
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
      </svg>
    ]
    

    const InteracaoChat = async () => {
        if (!inputMessage.trim()) {
            console.log('Entrada vazia')
            return "Digite algo para o chat-bot ler!"
        }

        console.log("Mensagem Usuario: " + inputMessage)

        const newMessage = { sender:'user', message: inputMessage}
        setChatMessages([...chatMessages, newMessage])

        try{
            const data = await RespostaChat(inputMessage)
            console.log("Mensagem Chatbot: ", data)
            const MensagemBot = data.outputs[0].outputs[0].artifacts.message || 'Desculpe, não entendi sua pergunta. Tente novamente'
            const HistoricoChat = { sender:'chatbot', message: MensagemBot}
            setChatMessages((prevMessages) => [...prevMessages, HistoricoChat])
        } catch(err){
            console.error('Erro na resposta da API: ', err)
            console.log(err)
            const MensagemErro = {sender:'chatbot', message: 'Erro ao se comunicar com o servidor Langflow'}
            setChatMessages((prevMessages) => [...prevMessages, MensagemErro])
        }

        setInputMessage('')
    }

    const LimparChat = () =>{
        setChatMessages([])
    }

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

                <div className='Chatbot' id='CorpoChat' style={{
                    backgroundImage: `url(${darkMode ? RobochatLamp : Robochat})`,
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                }}
                     >
                    <div className='ChatBox'>
                        <div className='chat-messages'>
                            <button onClick={LimparChat} title='Limpar Chat' className='botao-limpar'>{refresh}</button>
                            {chatMessages.map((msg, index) => (
                                <div key={index} className={msg.sender === 'chatbot' ? 'bot-message' : 'user-message'} >
                                    {msg.message}
                                </div>
                            ))}
                        </div>
                        <div className='input-container'>    
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Digite sua mensagem"
                                className='input-chat'
                            />
                            <button className='botao-enviar' onClick={InteracaoChat}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )
}