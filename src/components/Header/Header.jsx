import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-info'>
        <img alt='Logo' src='/logo.png' height={50} />

        <h1 className='header-title'>DevInFood</h1>
      </div>

      <div className='header-info'>
        <Link className='header-link' to='/selecionado'>
          Selecionados
        </Link>

        <Link className='header-link' to='/'>
          Menu
        </Link>
      </div>
    </header>
  );
};
