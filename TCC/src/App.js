import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/navbar/Header'
import Home from './pages/Home/Home';
import HomeLogado from './pages/HomeLogado/HomeLogado';
import Responsaveis from './pages/Repsonsaveis/Responsaveis';
import Footer from './componentes/footer/Footer';
import Sobre from './pages/Sobre/Sobre';
import Chatbot from './pages/Chatbot/chat';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import Vantagens from './pages/Vantagens/vantagens';
//import CadastroResp from './componentes/CadastroResp/CadastroResp';
//import CadastroProf from './componentes/CadastroProf/CadastroProf';
import Games from './pages/Games/Games';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      {window.location.pathname !== "/LoginScreen" &&  (
        <Header />
      )}
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<HomeLogado />} />
        <Route path="/responsaveis" element={<Responsaveis />} /> 
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/vantagens" element={<Vantagens />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
      </Routes>
      {window.location.pathname !== "/LoginScreen" &&  (
        <Footer />
      )}
    </div>
  </Router>
  

  );
}

export default App;
