import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactsForm/ContactsForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    this.setState((prevState) => ({
      contacts: [data, ...prevState.contacts],
    }));
    // this.setState((prevState) => {
    //   prevState.contacts.map((contact) => {
    //     // if (contact.name === data.name) {
    //     //   return { contacts: [data, ...prevState.contacts] };
    //     // }
    //     // return { contacts: prevState.contacts };
    //     return {
    //       contacts:
    //         contact.name === data.name
    //           ? prevState.contacts
    //           : [data, ...prevState.contacts],
    //     };
    //   });
    // });
  };

  // handleCountFeedback = ({ option }) => {
  //   this.setState((prevState) => {
  //     return {
  //       [option.toLowerCase()]: prevState[option] + 1,
  //     };
  //   });
  // };
  addFilterValue = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.filter);
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} changeFilter={this.addFilterValue} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
