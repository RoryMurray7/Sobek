import "./index.css";

function Privacypolicy() {
  return (
    <div id="termsOfServiceContainer" className="privacyPolicyContainer center">
      <h1 style={{marginBottom: "0"}}>Privacy Policy</h1>
      <h6 className="center" style={{color: "grey"}}>Last Updated: 13/03/2025</h6>
      <h4>1. Data We Collect</h4>
      <p>We operate using under a strict data minimisation policy meaning we only collect and store data that is absolutely necessary</p>
      <h4>2. How We Share Your Data</h4>
      <p>We do not share, sell or lend your personal data to any third parties, unless required under law.</p>
      <h4>3. Data Security</h4>
      <p>Each contract is assigned a designated shell company registered in the British Virgin Islands (BVI). All client data associated with the contract is owned by this shell company and encrypted on servers in Switzerland.</p>
      <p>For added security, encryption is handled by a Hardware Security Module (HSM). Access to the HSM for decryption requires a multi-factor authentication process, which includes (but is not limited to):</p>
      <ul>
        <li>- Hardware security tokens</li>
        <li>- Biometric Authentication</li>
        <li>- One-time passwords (OTP) handled by a third party outside of the UK</li>
      </ul>
      <p>To further protect against unauthorized access:</p>
      <ul>
        <li>- No hardware security keys are stored in Switzerland.</li>
        <li>- The HSM operates with a dead man's switch, which automatically deletes encryption keys if the data is not accessed for 72 hours.</li>
        <li>- Authorized personnel, including the client, can independently freeze the supply of OTP's, preventing access to the HSM.</li>
      </ul>
      <p>Once a contract ends, the associated shell company is dissolved within 14 days, and all of its records, including encrypted data, are permanently deleted in accordance with our data retention policies.</p>
      <h4>4. Your Rights</h4>
      <p>Under UK GDPR and the Data Protection Act, you have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Right to Access</strong> – You can request a copy of the data we hold about you.</li>
        <li><strong>Right to Rectification</strong> – You can ask us to correct inaccurate or incomplete data.</li>
        <li><strong>Right to Erasure</strong> – You can request deletion of your personal data, subject to legal requirements.</li>
        <li><strong>Right to Restrict Processing</strong> – You can limit how we use your data in certain circumstances.</li>
        <li><strong>Right to Data Portability</strong> – You can request your data in a structured, commonly used format.</li>
        <li><strong>Right to Object</strong> – You can object to data processing, including direct marketing.</li>
        <li><strong>Rights Related to Automated Decision-Making</strong> – We do not use automated decision-making or profiling.</li>
      </ul>
      <p>To exercise these rights, contact us via the details provided at the beginning of your contract. We will respond within one month, as required by law.</p>
      <h4>5. Data Retention</h4>
      <p>Sobek uses independent contractors. Contractor records don't require long-term storage.</p>
      <p>Client data is only retained as long as the contract is active. It is deleted automatically when the shell company is dissolved after 14 days.</p>
      <h6>Client & Personal Data</h6>
      <p>Personal dats is held only as long as necessary in accordance with the UK GDPR & Data Protection Act. We operate using a strict data minimisation policy and automatically purge un-needed data every 24 hours.</p>
      <h4>6. Changes to This Policy</h4>
      <p>We may update this Privacy Policy. We will notify users of any changes through our website or direct communication.</p>
    </div>
  );
}

export default Privacypolicy;
