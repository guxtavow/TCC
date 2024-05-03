import './Header.css'
import logoBee from './bee 1.png'



export default function Header(){

return(
    <>
        <nav className="navbar navbar-expand-lg"
        style={{
            backgroundColor:'#DDBCFF'
        }}
        >
            <div class="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logoBee} className="Logo1" alt="1logo" width="40" height="40" style={{marginLeft:'20px'}} />
                </a>
                <a class="navbar-brand" href="#"><b>TechKids</b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <div className='center'>
                        
                        <li class="nav-item">
                        <a class="nav-link" href="#"><b>Chat</b></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"><b>Professor</b></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"><b>Como usar</b></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"><b>Sobre Nós</b></a>
                        </li>
                    
                    </div>
                    <div className='Usuario'>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><b>Cadastre-se</b></a>
                        </li>
                        <button className='Login'><b>Login</b></button>
                    </div>
                </ul>
                </div>
            </div>
        </nav>

    </>
)
}