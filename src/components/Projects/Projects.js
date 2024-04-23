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
import a2go from "../../Assets/Projects/argo.png";
import csesimulator from "../../Assets/Projects/cseVRSimulator.png";
import RSview from "../../Assets/Projects/RSview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
          <br />
          Due to academic integrety concerns, access to the implementation of
          some projects will be sent on request.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RSview}
              isBlog={false}
              title="Restaurant Simulator (VR)"
              description="A VR restaurant simulator combining the mechanics of a traditional cooking and farming game. It aims to achieve educational and training purpose by showing the complete food supply chain, from raw material growth to food preparation."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://p3-devlog.webflow.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csesimulator}
              isBlog={false}
              title="UMich Student Life Simulator (VR)"
              description="A VR virtual tour that simulates CSE students' life at UMich. You can relives the days in the familiar lab room and play with the objects in it."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://youtu.be/DkQEhOIJeu8"
            />
          </Col>

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
              imgPath={a2go}
              isBlog={false}
              title="A2-go! (AR)"
              description="An educational and athletics Augmented Reality mobile application marketed towards tourists visiting Ann Arbor. The app seeks to educate visitors on the area’s history, institutions, venues, and activity, while also getting them out and about for physical exercise and socialization."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://youtu.be/yW5PcPxd1QA"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcareer}
              isBlog={false}
              title="MCareer"
              description="An UI/UX design project with a mobile application prototype to support undergraduate students' career development. We conducted a user-centered design process and developed the prototype with Figma."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.youtube.com/watch?v=j6whB2uk0IU"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
