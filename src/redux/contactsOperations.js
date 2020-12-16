import { get, post, deleteItem } from "./api";
import {
  getContactsStart,
  postContactStart,
  deleteContactStart,
} from "./contactsActions";
export const fetchContacts = () => dispatch => {
  dispatch(getContactsStart());
  dispatch(get());
};
export const postContact = contact => dispatch => {
  dispatch(postContactStart());
  dispatch(post(contact));
};
export const deleteContact = id => dispatch => {
  dispatch(deleteContactStart());
  dispatch(deleteItem(id));
};