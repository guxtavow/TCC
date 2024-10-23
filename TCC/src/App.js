import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/navbar/Header'
import Home from './pages/Home/Home';
import Responsaveis from './pages/Repsonsaveis/Responsaveis';
import Footer from './componentes/footer/Footer';
import Sobre from './pages/Sobre/Sobre';
import Chatbot from './pages/Chatbot/chat';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import Cadastro from './pages/Cadastro/Cadastro';
import Vantagens from './pages/Vantagens/vantagens';
import Games from './pages/Games/Games';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
          <Header />
            <Routes>  
              <Route path="/" element={<Home />} />
              <Route path="/responsaveis" element={<Responsaveis />} /> 
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/vantagens" element={<Vantagens />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/Games" element={<Games />} />
            </Routes>
          <Footer />
      </div>
    </Router>

  );
}

export default App;
