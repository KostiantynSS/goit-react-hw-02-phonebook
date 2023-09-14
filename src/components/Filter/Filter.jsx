import { Component } from 'react';
class Filter extends Component {
  changeFilter = e => {
    this.props.onChange(e.currentTarget.value);
  };
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.changeFilter}
      />
    );
  }
}

export default Filter;
