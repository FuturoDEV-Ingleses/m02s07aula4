import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Router } from './Router/Router';
import { SelecionadoProvider } from './contexts/SelecionadoContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <SelecionadoProvider>
        <main className='main'>
          <Router />
        </main>
      </SelecionadoProvider>
    </BrowserRouter>
  );
}

export default App;
