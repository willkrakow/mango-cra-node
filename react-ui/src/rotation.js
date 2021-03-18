import React, { useState } from "react";

const Rotation = () => {
  const [x, setX] = useState(0);
  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      function (event) {
        const alpha = event.alpha;
        const beta = event.beta;
        const gamma = event.gamma;
        setX(gamma);
        console.log("something", alpha, beta, gamma);
      },
      false
    );
  }
  return <p style={{ transform: `rotateX(${x}deg)` }}>here</p>;
};

export default Rotation;
