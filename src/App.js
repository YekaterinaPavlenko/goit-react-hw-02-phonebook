import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactsForm/ContactsForm";
class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data) => {
    const { contacts } = this.state;
    console.log(data);
    // console.log(prevState);
    this.setState((prevState) => {
      console.log(prevState);
      return {
        contacts: prevState.contacts.map((contact) => {
          console.log(contact);
          return contact.phone ? contacts : { ...contacts, data };
        }),
      };
    });
  };
  render() {
    // const { name, contacts } = this.state;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {/* <Filter />
  <ContactList /> */}
      </div>
    );
  }
}

export default App;
