import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Zoom, Flip, Fade, Roll } from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import about from "./images/about.png";
import mission from "./images/mission.png";
import omegaLeo1 from "./images/omegaLeo1.png";

export class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img" alt="avatar" src={omegaLeo1} />
            <div className="banner-text">
              <h1>
                <Zoom left cascade>
                  <div style={{ display: "inline-block" }}>OMEGA</div>
                </Zoom>
                <Zoom cascade>
                  <div style={{ display: "inline-block" }}> LEO</div>
                </Zoom>
                <Zoom right cascade>
                  <div style={{ display: "inline-block" }}> CLUB</div>
                </Zoom>
              </h1>
              <h4>
                <Flip left cascade>
                  <i>Together We Serve</i>
                </Flip>
              </h4>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://www.github.com"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
        <Container fluid="True">
          <Row id="about-section">
            <Col xs={6}>
              <Fade left>
                <img alt="about" src={about} />
              </Fade>
            </Col>
            <Col xs={6}>
              <h2>
                <Roll left cascade>
                  About Us
                </Roll>
              </h2>
              <hr />
              <p>
                Omega Leo Club is an integral part of the Lions family, Leos
                also have their own global network of over 6,500 Leo clubs in
                more than 140 nations. This international scope fosters a unique
                global identity among Leos and Lions. Leo clubs provide young
                people with an opportunity for development and contribution,
                individually and collectively, as responsible members of the
                local, national and international community.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row id="motto-section">
            <Col xs={6}>
              <Fade right>
                <img alt="motto" src={mission} />
              </Fade>
              <Col xs={6}>
                <h2>
                  <Roll right cascade>
                    Our Motto
                  </Roll>
                </h2>
                <hr />
                <p>
                  The Leo club motto — Leadership, Experience, Opportunity —
                  says it all: <br />
                  <br /> LEADERSHIP: Leo members acquire skills as project
                  organizers and motivators of their peers.
                  <br />
                  <br /> EXPERIENCE: They discover how teamwork and cooperation
                  can bring about change in their community and the world.
                  <br />
                  <br /> OPPORTUNITY: Leos develop positive character traits and
                  receive recognition for their contributions.
                </p>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landingpage;
