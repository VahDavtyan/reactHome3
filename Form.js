import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Change(event) {
    this.setState({ value: event.target.value });
  }

  Submit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.Submit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.Change} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
