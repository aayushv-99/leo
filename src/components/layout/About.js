import React, { Component } from "react";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title1">Omega Leo Club Program</h1>
        <hr className="hr1" />
        <p className="content">
          Omega Leo Club is an integral part of the Lions family, Leos also have
          their own global network of over 6,500 Leo clubs in more than 140
          nations. This international scope fosters a unique global identity
          among Leos and Lions. Leo clubs provide young people with an
          opportunity for development and contribution, individually and
          collectively, as responsible members of the local, national and
          international community.
        </p>
      </div>
    );
  }
}

export default About;
