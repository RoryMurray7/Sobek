import "./index.css";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";

function Packages() {
  return (
    <div className="sectionContainer" id="packagesContainer">
      <div className="large" id="packagesHeader">
        <h1>Packages</h1>
      </div>
      <div className="packagesCardContainer">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(77, 77, 77, 0.5)"
        >
          <div className="packagesCardHeader">
            <h5 className="packagesText">Baseline Intelligence</h5>
          </div>
          <hr></hr>
          <ul className="included">
            <li>High level threat assessments</li>
            <li>Refined publicly available intelligence reports</li>
            <li>Basic access to secure communication</li>
          </ul>
          <ul className="notIncluded">
            <li>Direct operational support</li>
            <li>Classified or proprietary intelligence</li>
            <li>Custom or tailored surveillance</li>
          </ul>
          <div className="buttonContainer">
            <div className="contactUsButton">
              <p>Contact Us</p>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(110, 110, 110, 0.5)"
        >
          <div className="packagesCardHeader">
            <h5 className="packagesText">Advanced Intelligence</h5>
          </div>
          <hr></hr>
          <ul className="included">
            <li>Real-time situational intelligence</li>
            <li>Access to restricted-source intelligence</li>
            <li>Bespoke risk mitigation reports</li>
            <li>Counterintelligence assessments</li>
            <li>Limited operational advisories</li>
          </ul>
          <ul className="notIncluded">
            <li>Full-spectrum asset deployment</li>
            <li>Unrestricted access to classified intelligence</li>
          </ul>
          <div className="buttonContainer">
            <div className="contactUsButton">
              <p>Contact Us</p>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(110, 110, 110, 0.5)"
        >
          <div className="packagesCardHeader">
            <h5 className="packagesText">Elite & Covert Operations Support</h5>
          </div>
          <hr></hr>
          <ul className="included">
            <li>Covert operational intelligence</li>
            <li>Classified strategic briefings</li>
            <li>Advanced counterintelligence and cybersecurity assessments</li>
            <li>Direct liaison with specialized assets</li>
            <li>Deep reconnaissance and threat analysis</li>
            <li>No records of engagement</li>
            <li>Unlimited Operational Intervention</li>
          </ul>
          <div className="buttonContainer">
            <div className="contactUsButton">
              <p>Contact Us</p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Packages;
