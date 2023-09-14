import { Component } from 'react';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';
class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = form;

    const inputContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    this.props.onSubmit(inputContact);
    form.reset();
  };
  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
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
          Number
          <label htmlFor="number">
            <input
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
