import './Header.css'
import logoBee from './bee 1.png'
import { useEffect, useState } from 'react'
import Sol from './image 22.png'
import Lua from './image 24.png'
import ApiLogin from '../../services/LoginApi'


export default function Header(){
  

    const [DarkMode, setIsDarkMode] = useState(() =>{
        const saveMode = localStorage.getItem('dark-mode')
        return saveMode ? JSON.parse(saveMode) : false
    })

    const logado = localStorage.getItem("logado") === "true"


    const ativarDarkmode = () =>{
        setIsDarkMode(prev =>{
            localStorage.setItem('dark-mode', JSON.stringify(!prev))
            return !prev
        })
    }

    useEffect(() =>{
        if(DarkMode){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    }, [DarkMode])


  

return(
    <>
        <nav className="navbar navbar-expand-lg"
        style={{
            backgroundColor:'#DDBCFF'
        }}
        >
            <div class="container-fluid">
                {!logado ?(
                    <>
                      <a className="navbar-brand" href="/">
                      <img src={logoBee} className="Logo1" alt="1logo" width="40" height="40" style={{marginLeft:'20px'}} />
                        </a>
                    <a class="navbar-brand" href="/"><b>TechKids</b></a>
                    </>
                ):(
                    <>
                        <a className="navbar-brand" href="/Home">
                            <img src={logoBee} className="Logo1" alt="1logo" width="40" height="40" style={{marginLeft:'20px'}} />
                        </a>
                        <a class="navbar-brand" href="/Home"><b>TechKids</b></a>
                    </>
                )}
      
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    {!logado ?( 
                        <>
                    <div className='center'>
                        
                        <li class="nav-item">
                        <a class="nav-link" href='/vantagens'><b>Como usar</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/sobre' ><b>Sobre Nós</b></a>
                        </li>
                    

                    </div>
                    
                    <button onClick={ativarDarkmode} id='night'>{DarkMode ? <img src={Lua} id='lua' width={45}/> : <img src={Sol} id='sol' width={45} /> }</button> 
                    
                    <div className='Usuario'>
                        <li class="nav-item">
                            <a class="nav-link" href="/Cadastro"><b>Cadastre-se</b></a>
                        </li>
                        <button className='Login'><a className='nav-link' href="/LoginScreen"><b>Login</b></a></button>
                    </div>
                    </> 
                    ):(
                        <>
                        <div className='center'>
                        
                        <li class="nav-item">
                        <a class="nav-link" href='/chatbot'><b>Chat</b></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href='/responsaveis'><b>Professor</b></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href='/vantagens'><b>Como usar</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/sobre' ><b>Sobre Nós</b></a>
                        </li>
                    

                        </div>
                        
                        <button onClick={ativarDarkmode} id='night'>{DarkMode ? <img src={Lua} id='lua' width={45}/> : <img src={Sol} id='sol' width={45} /> }</button> 
                        
                        <div className='Usuario'>
                            bem-vindo ao TechKids!
                        </div>


                        <button className='Login' onClick={() => localStorage.setItem("logado", "false")}><a className='nav-link' href="/"><b>Logout</b></a></button> {/*MUDAR DEPOIS A CLASSE*/}
                    </>
                )}
                    
                </ul>
                </div>
            </div>
        </nav>

    </>
)
}