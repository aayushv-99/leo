import React, { Component } from "react";
import {
  Grid,
  Cell,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList
} from "react-mdl";
import { Zoom, Bounce } from "react-reveal";
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
                <Bounce left cascade>
                  <i>Together We Serve</i>
                </Bounce>
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
        <Container className="about-section">
          <Row>
            <Col>
              <img alt="about" src={about} />
              <span>
                <h1>About Us</h1>
                <p>
                  Omega Leo Club is an integral part of the Lions family, Leos
                  also have their own global network of over 6,500 Leo clubs in
                  more than 140 nations. This international scope fosters a
                  unique global identity among Leos and Lions. Leo clubs provide
                  young people with an opportunity for development and
                  contribution, individually and collectively, as responsible
                  members of the local, national and international community.
                </p>
              </span>
            </Col>
          </Row>
        </Container>
        <Container className="mission-section">
          <Row>
            <Col xs={6}>
              <h1>Our Mission</h1>
              <h5>
                Through the Leo Club Program, young people develop and practice
                leadership, organization and social skills <br /> through
                participation in Leo club activities and service projects.
                Involvement in these activities often fosters a <br /> lifetime
                commitment to helping others, while enhancing the community.
              </h5>
            </Col>
            <Col xs={6}>
              <img alt="mission" src={mission} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Footer size="mega">
                <FooterSection type="middle">
                  <FooterDropDownSection title="Features">
                    <FooterLinkList>
                      <a href="/">About</a>
                      <a href="/">Terms</a>
                      <a href="/">Partners</a>
                      <a href="/">Updates</a>
                    </FooterLinkList>
                  </FooterDropDownSection>
                  <FooterDropDownSection title="Details">
                    <FooterLinkList>
                      <a href="/">Specs</a>
                      <a href="/">Tools</a>
                      <a href="/">Resources</a>
                    </FooterLinkList>
                  </FooterDropDownSection>
                  <FooterDropDownSection title="Technology">
                    <FooterLinkList>
                      <a href="/">How it works</a>
                      <a href="/">Patterns</a>
                      <a href="/">Usage</a>
                      <a href="/">Products</a>
                      <a href="/">Contracts</a>
                    </FooterLinkList>
                  </FooterDropDownSection>
                  <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                      <a href="/">Questions</a>
                      <a href="/">Answers</a>
                      <a href="/">Contact Us</a>
                    </FooterLinkList>
                  </FooterDropDownSection>
                </FooterSection>
                <FooterSection type="bottom" logo="Title">
                  <FooterLinkList>
                    <a href="/">Help</a>
                    <a href="/">Privacy & Terms</a>
                  </FooterLinkList>
                </FooterSection>
              </Footer>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landingpage;
