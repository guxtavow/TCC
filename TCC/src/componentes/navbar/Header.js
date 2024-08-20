import './Header.css'
import logoBee from './bee 1.png'
import { useEffect, useState } from 'react'



export default function Header(){
    
    const [DarkMode, setIsDarkMode] = useState(() =>{
        const saveMode = localStorage.getItem('dark-mode')
        return saveMode ? JSON.parse(saveMode) : false
    })

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


    const smile = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
        </svg>

    const smile_night = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-emoji-sunglasses-fill" viewBox="0 0 16 16" id='sunglasses'>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.2 4.2 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A3 3 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515zM4.969 9.75A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"/>
  </svg>

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
                    
                    <button onClick={ativarDarkmode} id='night'>{DarkMode ? smile_night : smile}</button> 
                    
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