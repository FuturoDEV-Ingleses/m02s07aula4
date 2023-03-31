import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({ produto }) => {
  return (
    <div className='card'>
      <img alt='Imagem do produto' className='card-image' src={produto.img} />

      <div className='card-info'>
        <h3 className='card-title'>{produto.nome}</h3>

        <p className='card-description'>{produto.descricao}</p>

        <div className='card-footer'>
          <p className='card-price'>{`R$ ${produto.valor.toFixed(2)}`}</p>
          <p className='card-time'>{produto.tempoPreparo}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    tempoPreparo: PropTypes.string.isRequired,
  }).isRequired,
};
