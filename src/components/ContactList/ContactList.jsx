import { Component } from 'react';
import css from './contactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
export class ContactList extends Component {
  deleteContact = data => {
    this.props.onClick(data);
  };
  render() {
    return (
      <>
        <ul className={css.list}>
          {this.props.contacts.map(contact => (
            <ContactItem
              contact={contact}
              key={contact.id}
              onClick={this.deleteContact}
            />
          ))}
        </ul>
      </>
    );
  }
}
