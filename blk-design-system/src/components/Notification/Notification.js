import React, { Component } from "react";
class Error extends Component {
  constructor() {
    super();
    this.state = {
      visibility: ""
    };
  }
  hideMe = () => {
    this.setState({ visibility: "is-hidden" });
  };
  render() {
    return (
      <div className={`error-container ${this.state.visibility}`}>
        <div class="columns">
          <div class="column is-four-fifths">
            <div class={"notification" + " " + this.props.whichColor}>
              <span className="" onClick={this.hideMe}>
                <i class="fa fa-2x fa-bullhorn" aria-hidden="true" />
              </span>
              <text>
                <strong>Heads Up!</strong> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit lorem ipsum d
              </text>
              <div className="cross" onClick={this.hideMe}>
                X
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
