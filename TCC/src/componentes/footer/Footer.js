import './Footer.css'
import logoBee from './bee 1.png'
import Face from './facebook-logo 1.png'
import Link from './LinkedIn Icon.png'
import Twitter from './Twitter Logo.png'

export default function Footer(){

return(
<>
<div className='infoDuvida'>
    <div className='Duvida'>
        <h2>Você ainda tem alguma dúvida?</h2>
        <p>Não hesite em nos deixar o seu número de telefone. Entraremos em<br />
           contato com você para discutir qualquer dúvida que você possa ter.
        </p>
        <div className="input-group">
        <input type="text" className="form-control" placeholder="Digite seu número de telefone" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button">Increver-se</button>
        </div>
    </div>
</div>

<div className='infoFooter'>
    <div className='Icons'>
    <img src={logoBee} className="Logo1" alt="1logo" width="40" height="40" style={{
        marginRight:'15px'
    }}
    />
    <b>TechKids</b>
        <div className='Sociais' style={{
        padding:'10px',
        marginLeft:'25px',
        float:'left'
        }}
        >
            <img src={Face} className='Facebook' alt='2logo' style={{marginRight:'15px'}} />
            <img src={Twitter} className='X' alt='2logo' style={{marginRight:'15px'}}/>
            <img src={Link} className='Linkedin' alt='2logo' style={{marginRight:'15px'}}/>
            <br />
            <br />

            ©2024 TechKids <br />
            <br />
            <p id='text1'>Techkids é cadastrado, <br />marca registrada de techkids.co.</p>
        </div>
    </div>
    
    <div className='links'>
        <table className='Comunidade'>
            <h3>Comunidade</h3>
            <tr><a href='#' className='Link' id='Developers'>Developers</a></tr>
        </table>

        <table className='Links-Rapidos'>
            <h3>Links Rápidos</h3>
            <tr><a href='#' className='Link' id='Parceiros'>Inicio</a></tr>
            <tr><a href='#' className='Link' id='Developers'>Chat</a></tr>
            <tr><a href='#' className='Link' id='Blog'>Pais/Professores</a></tr>
            <tr><a href='#' className='Link' id='Blog'>Como usar</a></tr>
            <tr><a href='#' className='Link' id='Blog'>Sobre nós</a></tr>
        </table>

        <table className='Mais'>
            <h3>Mais</h3>
            <tr><a href='#' className='Link' id='Parceiros'>Termos</a></tr>
            <tr><a href='#' className='Link' id='Blog'>Privacidade</a></tr>
            <tr><a href='#' className='Link' id='Blog'>Ajuda</a></tr>
            <tr><a href='#' className='Link' id='Blog'>Contato</a></tr>
        </table>
    </div>

</div>

</>
)



}