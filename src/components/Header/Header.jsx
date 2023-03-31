import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-info'>
        <img alt='Logo' src='/logo.png' height={50} />

        <h1 className='header-title'>DevInFood</h1>
      </div>

      <a className='header-link' href='#'>
        Menu
      </a>
    </header>
  );
};
