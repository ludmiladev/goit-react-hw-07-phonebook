import React, { Component } from "react";
import ContactsList from "../ContactsList/ContactsListContainer";
import ContactForm from "../ContactForm/ContactFormContainer";
import FilterContainer from "../Filter/FilterContainer";
import styles from "./App.module.css";
import Logo from "../Logo/Logo";
import { connect } from "react-redux";
import { fetchContacts } from "../../redux/contactsOperations";
import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.container}>
        <Logo  />
        <ContactForm  />
        <h2>Contacts</h2>
        <FilterContainer />
        <ContactsList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
};