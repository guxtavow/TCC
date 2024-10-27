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
import EditarResp from './pages/EditarResp/EditarResp';
import EditarProf from './pages/EditarProf/EditarProf';
import AddFilho from './pages/AddFilho/AddFilho';




function App() {
  return (
      <div className="App">
          <Header />
          <AddFilho />
          <Footer />
      </div>

  );
}

export default App;
