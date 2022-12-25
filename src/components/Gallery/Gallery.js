import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GalleryCard from "./GalleryCards";
import Particle from "../Particle";
import dashduck from "../../Assets/Gallery/dashduck.png";
import shapolang from "../../Assets/Gallery/shapolang.jpg";
import flora from "../../Assets/Gallery/flora.jpg";
import hk from "../../Assets/Gallery/hk.png";
import menu from "../../Assets/Gallery/menu.png";
import ferriswheel from "../../Assets/Gallery/ferriswheel.png";
import windy from "../../Assets/Gallery/windy.jpg";
import fish1 from "../../Assets/Gallery/fish1.jpg";
import fish2 from "../../Assets/Gallery/fish2.jpg";

function Gallery() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <h1 className="project-heading">
              My Recent <strong className="purple">Artwork</strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few pieces of artwork I have created.
            </p>
          </Row>
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <h2 style={{ color: "white" }}> <strong className="purple">Fan Art</strong></h2>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
            <Col md={6} className="project-card">
              <GalleryCard
                imgPath={shapolang}
                title="Chang Geng - Sha Po Lang"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
            <Col md={6} className="project-card">
              <GalleryCard
                imgPath={flora}
                title="Flora - Tangle Tower"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
            <Col md={6} className="project-card">
              <GalleryCard
                imgPath={fish1}
                title="Untitled - Big Fish & Begonia"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
            <Col md={6} className="project-card">
              <GalleryCard
                imgPath={fish2}
                title="Untitled - Big Fish & Begonia"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
            <Col md={8} className="project-card">
              <GalleryCard
                imgPath={hk}
                title="Untitled - Hollow Knight"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
          </Row>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <h2 style={{ color: "white" }}> <strong className="purple">Original Art</strong></h2>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
            <Col md={4} className="project-card">
              <GalleryCard
                imgPath={dashduck}
                title="Kitten & Shark"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
            <Col md={4} className="project-card">
              <GalleryCard
                imgPath={dashduck}
                title="Kitten & Shark"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
            <Col md={4} className="project-card">
              <GalleryCard
                imgPath={dashduck}
                title="Kitten & Shark"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
            <Col md={6} className="project-card">
              <GalleryCard
                imgPath={menu}
                title="Menu - Raveler"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
            <Col md={6} className="project-card">
              <GalleryCard
                imgPath={ferriswheel}
                title="Ferris Wheel - Raveler"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
            <Col md={8} className="project-card">
              <GalleryCard
                imgPath={windy}
                title="Being the Wind"
              // description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              />
            </Col>
          </Row>
        </div>

      </Container>
    </Container>
  );
}

export default Gallery;
