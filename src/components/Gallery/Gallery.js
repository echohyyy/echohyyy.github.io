import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blackwhite from "../../Assets/Projects/blackwhite.png";
import insta485 from "../../Assets/Projects/insta485.png";
import mcareer from "../../Assets/Projects/mcareer.png";
import raveler from "../../Assets/Projects/raveler.png";
import ask485 from "../../Assets/Projects/ask485.png";
import unravel from "../../Assets/Projects/unravel.png";

function Gallery() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Due to academic integrety concerns, access to the implementation of some projects will be sent on request.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raveler}
              isBlog={false}
              title="Raveler"
              description="A 2D multi-player emotional platform game built with Unity. It tells a love story about the journey of a young couple bonded by their predestined relationship."
              ghLink="https://github.com/jiyuchennn/eecs494-p3/tree/main"
              demoLink="https://echoooooo.itch.io/raveler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackwhite}
              isBlog={false}
              title="Black & White"
              description="A 2D platform puzzle game built with Unity. The player should solve puzzles, collect gems and save the poluted kingdom."
              ghLink="https://github.com/echohyyy/eecs494-p2-BlackAndWhite"
              demoLink="https://echoooooo.itch.io/blackwhite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unravel}
              isBlog={false}
              title="Unravel"
              description="A 3D puzzle game built with Elm-lang and WebGL. It tells a story about the inner world of a girl with fear of crowds and how she gradually discovers the goodwell in people's heart."
              ghLink="https://github.com/Hilbert-Yaa/elm-unravel"
              demoLink="https://hilbert-yaa.github.io/elm-unravel/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcareer}
              isBlog={false}
              title="MCareer"
              description="An mobile application prototype to support undergraduate students' career development. We conducted a user-centered design process and developed the prototype with Figma."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.youtube.com/watch?v=j6whB2uk0IU"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ask485}
              isBlog={false}
              title="Web Search Engine"
              description="A scalable search engine with features like  text analysis (tf-idf) and link analysis (PageRank), and parallel data processing with MapReduce."
              ghLink="https://github.com/echohyyy/p5-search-engine"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insta485}
              isBlog={false}
              title="Instagram Replicate"
              description="An Instagram clone implemented with client-side dynamic pages built with JavaScript, AJAX and REST API."
              ghLink="https://github.com/echohyyy/p3-insta485-clientside"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;
