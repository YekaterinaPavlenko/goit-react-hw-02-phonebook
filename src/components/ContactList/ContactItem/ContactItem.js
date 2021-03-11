import React from "react";
import ls from "../ContactList.module.css";
import PropTypes from "prop-types";
const ContactItem = ({ contacts }) => {
  //   console.log(contacts);
  return contacts.map((contact) => {
    const { name, number, id } = contact;
    return (
      <li key={id} className={ls.item}>
        <p>{name}:</p>
        <p>{number}</p>
      </li>
    );
  });
};
ContactItem.defaultProps = {
  name: "",
  number: "",
  id: "",
};
ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactItem;
