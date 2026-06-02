import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRATHMESH
              <br />
              <span>CHAVAN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>CEO &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Performance</div>
              <div className="landing-h2-2">Marketer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI-Enabled</div>
              <div className="landing-h2-info-1">Builder</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
