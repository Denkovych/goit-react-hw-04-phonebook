import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import style from './ContactList.module.css';

export default function ContactList({ contacts, filter, deleteContact }) {
  return (
    <ul className={style.contactList}>
      {contacts.map(({ name, number, id }) => (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              handleClick={() => deleteContact(id)}
            />
          ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};