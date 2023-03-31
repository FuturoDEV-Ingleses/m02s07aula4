import PropTypes from 'prop-types';
import './Secao.css';

export const Secao = ({ title }) => {
  return (
    <>
      <h2 className='secao-title'>{title}</h2>

      <hr className='secao-divider' />
    </>
  );
};

Secao.propTypes = {
  title: PropTypes.string.isRequired,
};
