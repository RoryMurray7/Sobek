import "./index.css";

function Privacypolicy() {
  return (
    <div id="termsOfServiceContainer" className="center">
      <h1 style={{marginBottom: "0"}}>Privacy Policy</h1>
      <h6 className="center" style={{color: "grey"}}>Last Updated: 13/03/2025</h6>
      <h4>1. Data We Collect</h4>
      <h4>2. How We Use Your Data</h4>
      <h4>3. How we Share Your Data</h4>
      <h4>4. Data Security</h4>
      <p>Each contract is assigned a designated shell company registered in the British Virgin Islands (BVI). All client data associated with the contract is owned by this shell company and encrypted on servers in Switzerland.</p>
      <p>For added security, encryption is handled by a Hardware Security Module (HSM). Access to the HSM for decryption requires a multi-factor authentication process, which includes:</p>
      <ul>
        <li>Hardware security tokens</li>
        <li>Biometric Authentication</li>
        <li>One-time passwords (OTP) handled by a third party outside of the UK</li>
      </ul>
      <p>To further protect against unauthorized access:</p>
      <ul>
        <li>No hardware security keys are stored in Swizerland.</li>
        <li>The HSM operates with a dead man's switch, which automatically deletes encryption keys if the data is not accessed for 72 hours.</li>
        <li>Authorized personnel, including the client, can independently freeze the supply of OTP's, preventing access to the HSM.</li>
      </ul>
      <p>This setup makes decryption impossible without full authorization. Even if Swiss authorities seize the data and HSM, UK authorities raid our storage, seize the keys, arrest personell with biometric authentication and force them to use biometric authentication, they cant force passwords from us and it would be completely impossible ot brute force the password before the dead man's switch wipes the keys, rendering the data unreadable forever. to decrypt the data even with complete cooperation from all territories. This is as the UK cannot force Sobek to hand over the complex password, nor brute force it before the dead man's switch wipes the key.</p>
      <p>Once a contract ends, the associated shell company is dissolved within 14 days, and all of its records, including encrypted data, are permanently deleted in accordance with our data retention policies.</p>
      <h4>5. Your Rights</h4>
      <h4>6. Data Retention</h4>
      <p>Sobek uses independent contractors. Contractor records dont require long-term storage.</p>
      <h6>Client & Personal Data</h6>
      <p>Personal dats is held only as long as necessary in accordance with the UK GDPR & Data Protection Act. We operate using a strict data minimisation policy and automatically purge un-needed data every 24 hours.</p>
      <h4>7. Changes to This Policy</h4>
      <p>We may update this Privacy Policy. We will notify users of any changes through our website or direct communication.</p>
    </div>
  );
}

export default Privacypolicy;
