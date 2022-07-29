import PropTypes from 'prop-types';
import style from './ContactListItem.module.css';

export default function ContactListItem({ name, number, handleClick }) {
  return (
    <li className={style.item}>
      <span className={style.name}>{name}:</span>{' '}
      <span className={style.number}>{number}</span>
      <button onClick={handleClick} className={style.button}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};