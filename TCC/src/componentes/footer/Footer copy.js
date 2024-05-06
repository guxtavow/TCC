import './Footer.css'

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
    <a className="navbar-brand" href="#">
        <img src={logoBee} className="Logo1" alt="1logo" width="40" height="40" style={{marginLeft:'20px'}} />
    </a>

    </div>

</div>

</>
)



}