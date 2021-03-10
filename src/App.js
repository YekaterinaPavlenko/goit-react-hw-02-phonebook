import React, { Component } from "react";

import "./App.css";
// import { v4 as uuidv4 } from "uuid";
// uuidv4();
class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  handleChange = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ name: e.target.value });

    console.log(this.state);
    console.log(`ввели имя:`);
  };
  render() {
    const { name, contacts } = this.state;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form>
          <label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              onChange={this.handleChange}
              value={name}
            ></input>
          </label>
        </form>
        {/* <ContactForm /> */}

        <h2>Contacts</h2>
        {/* <Filter />
  <ContactList /> */}
      </div>
    );
  }
}

export default App;
