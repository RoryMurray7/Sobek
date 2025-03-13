import "./index.css";
import { Link } from "react-router";

function Termsofservice() {
  return (
    <div className="center" id="termsOfServiceContainer">
      <h1 style={{marginBottom: "-2rem"}}>Terms of Service</h1>
      <h6 style={{color: "grey"}}>Last Updated: 13/03/2025</h6>
      <h4>1. Acceptance of Terms</h4>
      <p>By using our website and services, You agree that you have read, understood and are bound by these terms.</p>
      <h4>2. Eligibility</h4>
      <p>You must be at least 18 years old to use our services.</p>
      <h4>3. Use of Services</h4>
      <p>Unauthorized access, hacking, or misuse is prohibited.</p>
      <h4>4. Confidentiality & Privacy</h4>
      <p>Our <Link to="/privacy-policy" style={{textDecoration: "Underline"}}>Privacy Policy</Link> governs how we collect and use your data.</p>
      <h4>5. Disclaimers & Liability</h4>
      <p>Our services are provided "as-is" without warranties. We are not liable for any damages.</p>
      <h4>6. Termination</h4>
      <p>We may suspend or terminate access to our services for violation of these Terms.</p>
      <h4>7. Changes to These Terms</h4>
      <p>We may change these terms at any point, continued use after update means acceptance.</p>

    </div>
  );
}

export default Termsofservice;
