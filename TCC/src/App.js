import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/navbar/Header';
import Footer from './componentes/footer/Footer';
import Sobre from './componentes/Sobre/Sobre';
import LoginScreen from './componentes/LoginScreen/LoginScreen'
import Cadastro from './componentes/Cadastro/Cadastro'


function App() {
  return (
    <div className="App">
      <LoginScreen />
    </div>
  );
}

export default App;
