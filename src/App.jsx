import './App.css';
import { CardList } from './components/CardList/CardList';
import { Header } from './components/Header/Header';
import { produtos } from './listaProdutos';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <CardList title='Entradas' list={produtos.entradas} />

        <CardList title='Principais' list={produtos.principais} />

        <CardList title='Sobremesas' list={produtos.sobremesas} />
      </main>
    </>
  );
}

export default App;
