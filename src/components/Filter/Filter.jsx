import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from './Filter.module.css';

export default function Filter({ filter, handleChange }) {
  const inputId = nanoid();
  return (
    <>
      <label htmlFor={inputId} className={style.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={style.input}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};