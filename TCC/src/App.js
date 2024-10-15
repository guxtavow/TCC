import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/navbar/Header'
import Home from './componentes/Home/Home';
import Responsaveis from './componentes/Repsonsaveis/Responsaveis';
import Footer from './componentes/footer/Footer';
import Sobre from './componentes/Sobre/Sobre';
import Chatbot from './componentes/Chatbot/chat';
import LoginScreen from './componentes/LoginScreen/LoginScreen';
import Cadastro from './componentes/Cadastro/Cadastro';
import Vantagens from './componentes/Vantagens/vantagens';
import Games from './componentes/Games/Games';



function App() {
  return (
    <div className="App">
      <Header />
        <Games />
      <Footer />
    </div>
  );
}

export default App;
