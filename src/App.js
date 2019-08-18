import React, { Component, Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import "./App.css";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import BackgroundSlider from "react-background-slider";
import sc from "./assets/sc.png";
import bv from "./assets/bv.png";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="back">
          <BackgroundSlider images={[sc, bv]} duration={3} transition={1.5} />
        </div>
        <Header />
        <div className="App">
          <h1>
            <Zoom left cascade>
              <div className="om">OMEGA </div>
            </Zoom>
            <Zoom cascade>
              <div className="le"> LEO </div>
            </Zoom>
            <Zoom right cascade>
              <div className="cl"> CLUB</div>
            </Zoom>
          </h1>
          <h3 className="tagline1">
            <i>Together We Serve</i>
          </h3>
        </div>
        <About />
      </Fragment>
    );
  }
}

export default App;
