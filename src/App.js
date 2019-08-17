import React, { Component, Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import "./App.css";

import Header from "./components/layout/Header";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className="App">
          <h1>
            <Zoom left cascade>
              <div style={{ display: "inline-block" }}>OMEGA </div>
            </Zoom>
            <Zoom cascade>
              <div style={{ display: "inline-block" }}> LEO </div>
            </Zoom>
            <Zoom right cascade>
              <div style={{ display: "inline-block" }}> CLUB</div>
            </Zoom>
          </h1>
        </div>
      </Fragment>
    );
  }
}

export default App;
