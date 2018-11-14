import React, { Component, Fragment } from "react";

// Fancy background animation
import Particles from "react-particles-js";

import bg1 from "./../../Images/oct9_2.png";
import bg2 from "./../../Images/global2.png";
import bg3 from "./../../Images/global4.png";

const particlesParam = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  line_linked: {
    shadow: {
      enable: true,
      color: "#3CA9D1",
      blur: 5
    }
  }
};

export default class Backround extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            background: "#595959",
            bottom: "0%"
          }}
        />

        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "-35%",
            right: "-50%",
            background:
              "linear-gradient(to left bottom, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B,#008F7A)",
            transform: "skewX(30deg)",
            overflow: "hidden"
          }}
        />

        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            bottom: "-35%",
            left: "-50%",
            background:
              "linear-gradient(to right top, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B,#008F7A)",
            transform: "skewX(30deg)",
            overflow: "hidden"
          }}
        />

        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            opacity: "0.6",
            backgroundPosition: "left",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${bg1})`,
            bottom: "-3%"
          }}
        />

        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            opacity: "0.4",
            backgroundPosition: "right",
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${bg2})`,
            bottom: "-17%",
            right: "-5%"
          }}
        >
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              opacity: "0.6",
              backgroundPosition: "right",
              backgroundSize: "40%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${bg3})`,
              top: "-30%"
            }}
          />
          <Particles params={particlesParam} />
        </div>
      </Fragment>
    );
  }
}

{
  /* <Particles params={particlesParam} /> */
}

{
  /* <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              bottom: "-60%",
              backgroundPosition: "left",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ImageHeader})`,
              transform: "skewY(5deg)"
            }}
          />

          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              bottom: "-60%",
              backgroundPosition: "right",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${ImageHeader})`,
              transform: "skewY(5deg)"
            }}
          /> */
}
