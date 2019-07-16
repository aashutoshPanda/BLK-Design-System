import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div class="columns">
          <div class="column">First column</div>
          <div class="column">Second column</div>
          <div class="column">Third column</div>
          <div class="column">Fourth column</div>
        </div>
      </div>
    );
  }
}

export default App;
