import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Game Designer",
          "Computer Science Student",
          "Fantasy Art Enthusiast"
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
