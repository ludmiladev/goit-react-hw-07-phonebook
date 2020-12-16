import Axios from "axios";
import {
  getContactsSucess,
  getContactsError,
  postContactSuccess,
  postContactError,
  deleteContactSuccess,
  deleteContactError,
} from "./contactsActions";
export const get = () => dispatch => {
  Axios.get("http://localhost:4000/contacts")
    .then(({ data }) => dispatch(getContactsSucess(data)))
    .catch(error => dispatch(getContactsError(error)));
};
export const deleteItem = id => dispatch => {
  Axios.delete(`http://localhost:4000/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
export const post = contact => dispatch => {
  Axios.post("http://localhost:4000/contacts", contact)
    .then(({ data }) => dispatch(postContactSuccess(data)))
    .catch(error => dispatch(postContactError(error)));
};