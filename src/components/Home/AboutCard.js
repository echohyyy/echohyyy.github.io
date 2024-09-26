import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Elle Ho(何一)</span> (she/her/hers).
            <br />A Master's student pursuing MS in Information Science at <span className="purple">University of Pittsburgh</span>.
            <br />Prior to that I have received my B.S. in Computer Science at <span className="purple">University of Michigan</span>, and a B.E. in Electrical and Computer Engineering at <span className="purple">Shanghai Jiao Tong University</span>.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Fan Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Fantasy Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
