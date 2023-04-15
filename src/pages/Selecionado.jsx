import { useState } from 'react';
import { CardList } from '../components/CardList/CardList';
import { useSelecionados } from '../contexts/SelecionadoContext';

export const Selecionado = () => {
  const { selecionados, filtrados, filtrarSelecionados } = useSelecionados();
  const [filtro, setFiltro] = useState('');

  console.log(filtrados);

  const handleFiltrar = (event) => {
    filtrarSelecionados(event.target.value);
    setFiltro(event.target.value);
  };

  return (
    <>
      <label>Filtrar:</label>
      <input placeholder='Filtrar pelo nome do produto' onChange={handleFiltrar} value={filtro} />

      <CardList title='Selecionados' list={filtro ? filtrados : selecionados} />

      {!selecionados.length && !filtro && <p>Nenhum produto selecionado!</p>}
      {!filtrados.length && !!filtro && <p>Nenhum produto selecionado para o filtro informado!</p>}
    </>
  );
};
