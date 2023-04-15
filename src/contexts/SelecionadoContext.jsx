import { createContext, useContext, useEffect, useState } from 'react';

const SelecionadoContext = createContext();

const LOCAL_STORAGE_KEY = 'produtos';

const getSelecionados = () => {
  const selecionados = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (selecionados) {
    return JSON.parse(selecionados);
  }

  return [];
};

export const SelecionadoProvider = ({ children }) => {
  const [selecionados, setSelecionados] = useState(getSelecionados());
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selecionados));
  }, [selecionados]);

  const handleSelecionar = (item) => {
    setSelecionados((value) => [...value, item]);
  };

  const handleDeselecionar = (item) => {
    const novo = selecionados.filter((selecionado) => selecionado.id !== item.id);
    setSelecionados(novo);
  };

  const isSelecionado = (item) => {
    return selecionados.some((selecionado) => selecionado.id === item.id);
  };

  const filtrarSelecionados = (nome) => {
    const itensFiltrados = selecionados.filter(
      (item) =>
        item.nome.toLowerCase().includes(nome.toLowerCase()) ||
        item.descricao.toLowerCase().includes(nome.toLowerCase()),
    );

    setFiltrados(itensFiltrados);
  };

  return (
    <SelecionadoContext.Provider
      value={{
        selecionados,
        handleDeselecionar,
        handleSelecionar,
        isSelecionado,
        filtrados,
        filtrarSelecionados,
      }}
    >
      {children}
    </SelecionadoContext.Provider>
  );
};

export const useSelecionados = () => {
  return useContext(SelecionadoContext);
};
