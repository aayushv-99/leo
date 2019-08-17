import React, { Component, Fragment } from "react";
import Zoom from "react-reveal/Zoom";
import "./App.css";

import Header from "./components/layout/Header";
import BackgroundSlider from "react-background-slider";

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
        <BackgroundSlider
          images={[
            "https://wallpaperplay.com/walls/full/4/9/6/102687.jpg",
            "https://wallpaperplay.com/walls/full/a/6/3/102638.jpg"
          ]}
          duration={3}
          transition={1.5}
        />
      </Fragment>
    );
  }
}

export default App;
