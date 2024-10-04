import './Sobre.css'
import Garoto from './garoto.jpg'
import SobreNos from './img1.png'
import Garota from './image 10.png'

export default function Sobre(){
    return(
        <>
        <div className='Sobre'>
            <div className='Banner'>
                <img src={Garoto} alt='img1' id='garoto1' width='400px' />
                <img src={SobreNos} alt='img2' id='sobrenos' width='580px' />
            </div>

            <div className='WelcomeText'>
                <h2><b>Bem-vindo ao TechKids, sua porta de entrada para o futuro!</b></h2>
                <br />
                <p className='text1'>
                No Techkids, acreditamos que o aprendizado de tecnologia deve ser acessível, divertido e dinâmico tanto para as crianças, 
                como para os professores. Com nossa plataforma personalizada e interativa, buscamos abrir as portas para um mundo de conhecimento 
                sobre diversas areas de tecnologia.
                </p>
                <img src={Garota} alt='img3' id='menina' width='500px' />
            </div>

            <div className='Missao'>
                <div className='textoDiv'>
                    <p className='text2'>
                    Nosso objetivo é capacitar crianças a explorarem o mundo da tecnologia de forma criativa e educativa.
                    Queremos oferecer a elas a oportunidade de desenvolver habilidades essenciais para o futuro, 
                    enquanto se divertem e se inspiram em uma jornada emocionante de aprendizado.
                    </p>

                </div>
            </div>
        </div>
        </>
    )
}