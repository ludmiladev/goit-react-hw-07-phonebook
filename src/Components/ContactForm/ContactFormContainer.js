import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import { postContact } from "../../redux/contactsOperations";
import { getContacts } from "../../redux/selector";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  postContact: (contact) => dispatch(postContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);