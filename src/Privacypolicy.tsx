import "./index.css";

function Privacypolicy() {
  return (
    <div id="termsOfServiceContainer" className="center">
              <h1 style={{marginBottom: "-2rem"}}>Privacy Policy</h1>
      <h6 style={{color: "grey"}}>Last Updated: 13/03/2025</h6>
      <p>This article is governed by the following UK laws:</p>
      <h4>1. Data We Collect</h4>
      <h4>2. How We Use Your Data</h4>
      <h4>3. How we Share Your Data</h4>
      <h4>4. Data Security</h4>
      <p>Each contract is given its own shell company in the British Virgin Islands (BVI). All client data is owned by this shell company and encrypted on servers in Swizerland or Russia. For added security, the encryption is handled by a Hardware Security Module. In order to access the HSM and decrypt the data we use a combination of hardware tokens, biometric authentication, and complex passwords. No hardware seucrity keys are stored in Swizerland and the HSM operates with a dead man's switch to prevent forced decryption.</p>
      <p>This setup makes it absolutely impossible for authorities to decrypt the data even with absolute cooperation from all territories. This is as the UK cannot force Sobek to hand over the complex password, nor brute force it before the dead man's switch wipes the key.</p>
      <h4>5. Your Rights</h4>
      <h4>6. Data Retention</h4>
      <h6>A) Financial & Business Records</h6>
      <p>Invoices, payroll, and tax records are stored for 6 years, the minimum required by governing UK law.</p>
      <h6>B) Employee & HR Data</h6>
      <p>Sobek uses independent contractors. Contractor records dont require long-term storage.</p>
      <h6>Client & Personal Data</h6>
      <p>Personal dats is held only as long as necessary in accordance with the UK GDPR & Data Protection Act. We operate using a strict data minimisation policy and automatically purge un-needed data every 24 hours.</p>
      <h4>7. Changes to This Policy</h4>
      <p>We may update this Privacy Policy. We will notify users of any changes through our website or direct communication.</p>
    </div>
  );
}

export default Privacypolicy;
