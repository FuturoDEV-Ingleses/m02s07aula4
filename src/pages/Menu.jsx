import { CardList } from '../components/CardList/CardList';
import { produtos } from '../listaProdutos';

export const Menu = () => {
  return (
    <>
      <CardList title='Entradas' list={produtos.entradas} />

      <CardList title='Principais' list={produtos.principais} />

      <CardList title='Sobremesas' list={produtos.sobremesas} />
    </>
  );
};
