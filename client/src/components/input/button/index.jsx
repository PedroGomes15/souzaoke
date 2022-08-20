import React, { Component } from "react";

import "./styles.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var animateButton = function (e) {
      e.preventDefault = true;

      var bubblyElements = document.getElementsByClassName("bubbly");

      var element = bubblyElements[0];
      element.classList.remove("animate");

      element.classList.add("animate");
      setTimeout(function () {
        element.classList.remove("animate");
      }, 700);
      //reset animation
    };

    var bubblyButtons = document.getElementsByClassName("button-send");

    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener("click", animateButton, false);
    }
  }

  render() {
    return (
      <div>
        <button className="button-send" onClick={this.props.handleSend}>
          Pronto!
          <div className="bubbly" />
        </button>
      </div>
    );
  }
}
