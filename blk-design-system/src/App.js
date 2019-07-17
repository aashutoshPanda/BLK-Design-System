/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Notification from "./components/Notification/Notification";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container body-div">
        <div className="columns is-multiline">
          <div className="column">
            <button className="button is-primary">Default</button>
          </div>
          <div className="column">
            <button className="button is-rounded is-primary">Round</button>
          </div>
          <div className="column">
            <button className="button is-primary">With Icon</button>
          </div>
          <div className="column">
            <button className="button is-primary is-inverted is-rounded">
              Simple
            </button>
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
            <button className="button is-link is-medium">Link</button>
          </div>
          <div className="column">
            <button className="button is-primary is-medium">Primary</button>
          </div>
          <div className="column">
            <button className="button is-info is-medium">Info</button>
          </div>
          <div className="column">
            <button className="button is-success is-medium">Success</button>
          </div>
          <div className="column">
            <button className="button is-warning is-medium">Warning</button>
          </div>
          <div className="column">
            <button className="button is-danger is-medium">Danger</button>
          </div>
          <div className="column">
            <button className="button is-medium is-primary is-inverted">
              Neutral
            </button>
          </div>
        </div>
        <div className="columns is-multiline">
          <div className="column">
            <a className="has-text-weight-semibold is-primary"> Primary</a>
          </div>
          <div className="column">
            <a className="has-text-weight-semibold is-info"> Info</a>
          </div>
          <div className="column">
            <a className="has-text-weight-semibold is-success"> Success</a>
          </div>
          <div className="column">
            <a className="has-text-weight-semibold is-warning"> Warning</a>
          </div>

          <div className="column">
            <a className="has-text-weight-semibold is-danger"> danger</a>
          </div>
          <div className="column">
            <a className="has-text-weight-semibold is-neutral"> neutral</a>
          </div>
        </div>
        <div class="columns">
          <div class="column is-two-fifths">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="email"
                  placeholder="Email"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-check" />
                </span>
              </p>
            </div>
          </div>
          <div class="column is-two-fifths">
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-danger"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div className="column">
            <Notification whichColor="is-primary" />
            <Notification whichColor="is-success" />
            <Notification whichColor="is-warning" />
            <Notification whichColor="is-danger" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
