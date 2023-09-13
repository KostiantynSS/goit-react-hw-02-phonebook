import { Component } from 'react';
import css from './contactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <ul className={css.list}>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
