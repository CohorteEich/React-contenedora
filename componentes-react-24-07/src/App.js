
import './App.css';
import Layout from './components/Layout';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
   <Layout></Layout>
  <Saludo nombre="Maria" />
  <Saludo nombre="Pedro" />
  <Saludo nombre="Juan" />
    </div>
  );
}

export default App;
