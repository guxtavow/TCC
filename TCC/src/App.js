import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/navbar/Header';
import Footer from './componentes/footer/Footer';
import Sobre from './componentes/Sobre/Sobre';
import LoginScreen from './componentes/LoginScreen/LoginScreen'
import CadastroProf from './componentes/CadastroProf/CadastroProf'
import CadastroResp from './componentes/CadastroResp/CadastroResp'


function App() {
  return (
    <div className="App">
      <CadastroResp />
    </div>
  );
}

export default App;
