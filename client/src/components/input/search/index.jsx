import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

import "./styles.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  handleChangeInput(e, value) {
    this.setState({ input: e.target.value }, () => {
      const elementInput = document.getElementById("input-search");
      if (e.target.value) {
        if (!elementInput.classList.contains("openTextBox")) {
          elementInput.classList.add("openTextBox");
        }
        this.setState({ inputValue: e.target.value });
      } else {
        elementInput.classList.remove("openTextBox");
      }
    });
  }

  handleClickSearch(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.state.inputValue) return;
    this.props.handleSubmit(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleClickSearch} className="Hotbg">
        <input
          type="text"
          name=""
          id="input-search"
          className="Hotbg-txt"
          placeholder="Buscar Musica"
          onChange={this.handleChangeInput}
        />
        <div className="Hotbg-btn" onClick={this.handleClickSearch}>
          <i className="fa fa-search fa-10x"></i>
        </div>
      </form>
    );
  }
}
