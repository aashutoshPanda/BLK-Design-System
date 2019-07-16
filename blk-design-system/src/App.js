import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container body-div">
        <div className="columns">
          <div className="column is-quater">First column</div>
          <div className="column">Second column</div>
          <div className="column">Third column</div>
          <div className="column">Fourth column</div>
        </div>
        <div className="columns is-multiline">
          <div className="column">
            <button className="button is-primary">Default</button>
          </div>
          <div className="column">
            <button className="button is-primary">Round</button>
          </div>
          <div className="column">
            <button className="button is-primary">With Icon</button>
          </div>
          <div className="column">
            <button className="button is-primary">Simple</button>
          </div>
        </div>
        <div className="columns is-multiline">
          <div className="column">
            <button className="button is-small is-primary">Small</button>
          </div>
          <div className="column">
            <button className="button is-medium is-primary">Medium</button>
          </div>
          <div className="column">
            <button className="button is-large is-primary">Large</button>
          </div>
        </div>
        <div className="columns is-multiline">
          <div className="column">
            <button className="button is-link">Link</button>
          </div>
          <div className="column">
            <button className="button is-primary">Primary</button>
          </div>
          <div className="column">
            <button className="button is-info">Info</button>
          </div>
          <div className="column">
            <button className="button is-success">Success</button>
          </div>
          <div className="column">
            <button className="button is-warning">Warning</button>
          </div>
          <div className="column">
            <button className="button is-danger">Danger</button>
          </div>
          <div className="column">
            <button className="button">Neutral</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
