import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/navbar/Header';
import Footer from './componentes/footer/Footer';
import Sobre from './componentes/Sobre/Sobre';


function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;
