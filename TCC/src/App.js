import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/navbar/Header';
import Footer from './componentes/footer/Footer';
import Sobre from './componentes/Sobre/Sobre';
import Chatbot from './componentes/Chatbot/chat';


function App() {
  return (
    <div className="App">
      <Header />
        <Chatbot/>
      <Footer />
    </div>
  );
}

export default App;
