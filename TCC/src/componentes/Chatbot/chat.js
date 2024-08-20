import './chat.css'
import Robo from './robo.png'
import Lampada from './lampada.png'


export default function Chatbot(){



    return(
        <>
            <div className='Chat'>
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
            </div>
    
        </>
    )
}