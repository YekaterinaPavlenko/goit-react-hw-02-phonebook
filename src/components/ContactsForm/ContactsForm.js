import React, { Component } from "react";
import fs from "./ContactForm.module.css";
import PropTypes from "prop-types";

import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
    phoneId: "",
  };

  phoneId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(e.currentTarget.value);
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, phoneId: this.phoneId });
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", phone: "" });
  };
  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={fs.form}>
        <label>
          <input
            type="text"
            className={fs.input}
            placeholder="Enter name"
            name="name"
            onChange={this.handleChange}
            value={name}
          ></input>
        </label>
        <label>
          <input
            type="phone"
            className={fs.input}
            placeholder="Enter phone number"
            name="phone"
            onChange={this.handleChange}
            value={phone}
          ></input>
        </label>
        <button type="submit" className={fs.button}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = { onSubmit: PropTypes.func };

export default ContactForm;

// В App.js.

// render() {

// ....
// }
