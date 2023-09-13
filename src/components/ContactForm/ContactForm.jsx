import { Component } from 'react';
import css from './contactForm.module.css';
class ContactForm extends Component {
  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.props.addNewItem}>
          <label htmlFor="name" className={css.label}>
            Name
            <input
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
export default ContactForm;
