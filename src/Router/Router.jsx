import { Routes, Route } from 'react-router-dom';
import { Menu } from '../pages/Menu';
import { Selecionado } from '../pages/Selecionado';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='/selecionado' element={<Selecionado />} />
    </Routes>
  );
};
