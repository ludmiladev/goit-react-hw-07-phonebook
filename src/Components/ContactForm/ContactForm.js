import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";


const InitialState = { name: "", number: "" };

export default class AddContact extends Component {
  state = { contactToAdd: { ...InitialState } };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState(({ contactToAdd }) => ({
      contactToAdd: { ...contactToAdd, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state.contactToAdd;

    if (!name) {
      return;
    }

    if (!number) {
      return;
    }

    if (
      this.props.contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contact`);
      return;
    }

    this.props.postContact({ ...this.state.contactToAdd });
    this.reset();
  };

  reset = () => {
    this.setState({ contactToAdd: { ...InitialState } });
  };

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Введите имя"
          onChange={this.handleChange}
          value={this.state.contactToAdd.name}
        />
        <input
          type="text"
          name="number"
          placeholder="Введите номер"
          onChange={this.handleChange}
          value={this.state.contactToAdd.number}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

AddContact.propTypes = {
  postContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};