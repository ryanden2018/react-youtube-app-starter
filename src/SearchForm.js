import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = { inputField: "" };
  }

  handleChange = (event) => {
    this.setState(
      { inputField: event.target.value }
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setSearchTerm(this.state.inputField);
    this.props.searchAPI();
    event.target.reset();
  }

  render() {
    return (
      <div style={{position:"absolute",left:"100px",top:"20px"}}>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.inputField} />
        <input type="submit" value="Search" />
      </form>
      </div>
    );
  }
}
