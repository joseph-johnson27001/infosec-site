<template>
  <div class="terms">
    <div class="page-header">
      <div class="container">
        <h1>Terms and Conditions</h1>
        <p class="header-subtitle">Last updated: November 20, 2025</p>
      </div>
    </div>

    <div class="page-content">
      <div class="container">
        <div class="content-card">
          <section class="content-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Secure Information Handling Academy platform, you accept
              and agree to be bound by these Terms and Conditions. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section class="content-section">
            <h2>2. Certification Program</h2>
            <p>
              Our certification program is designed for contractors and professionals who handle
              sensitive information. The certification:
            </p>
            <ul>
              <li>Requires completion of all course modules and assessments</li>
              <li>Must be maintained through periodic renewal requirements</li>
              <li>Is subject to verification and may be revoked for violations</li>
              <li>Is recognized by participating industry partners and organizations</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>3. User Obligations</h2>
            <p>As a user of our platform, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Complete all course work and assessments honestly and independently</li>
              <li>Use the certification appropriately and not misrepresent your credentials</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>4. Payment Terms</h2>
            <p>Certification fees are due at the time of enrollment. We offer:</p>
            <ul>
              <li>Monthly subscription plans for individual professionals</li>
              <li>Annual plans with discounted rates</li>
              <li>Enterprise licensing for organizations</li>
              <li>Refunds within 30 days if you are not satisfied (subject to conditions)</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>5. Intellectual Property</h2>
            <p>
              All course materials, content, and certification marks are the intellectual property
              of Secure Information Handling Academy. You may not:
            </p>
            <ul>
              <li>Copy, reproduce, or distribute course materials</li>
              <li>Share your account access with others</li>
              <li>Use our certification marks without authorization</li>
              <li>Reverse engineer or attempt to access restricted areas</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>6. Certification Validity and Renewal</h2>
            <p>
              Certifications are valid for a specified period (typically 2 years) and require
              renewal to maintain validity. Renewal may require:
            </p>
            <ul>
              <li>Completion of continuing education requirements</li>
              <li>Payment of renewal fees</li>
              <li>Demonstration of continued professional competence</li>
              <li>Compliance with our code of conduct</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              While we strive to provide accurate and up-to-date information, the Secure Information
              Handling Academy is not liable for:
            </p>
            <ul>
              <li>Employment decisions made by third parties</li>
              <li>Technical issues that may interrupt service</li>
              <li>Changes to industry standards or regulations</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>8. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to our platform if you:</p>
            <ul>
              <li>Violate these Terms and Conditions</li>
              <li>Engage in fraudulent or dishonest conduct</li>
              <li>Misuse or misrepresent your certification</li>
              <li>Fail to maintain payment obligations</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>9. Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. We will notify you of any
              significant changes via email or through the platform. Continued use of our services
              after such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section class="content-section">
            <h2>10. Contact Information</h2>
            <p>If you have questions about these Terms and Conditions, please contact us:</p>
            <p class="contact-info">
              Email: legal@sihacademy.com<br />
              Address: [Your Business Address]<br />
              Phone: [Your Phone Number]
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #5b4a7e 0%, #3d2f5a 100%);
  color: var(--text-light);
  padding: 4rem 0 3rem;
  text-align: center;
}

.page-header h1 {
  color: var(--text-light);
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.header-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.125rem;
  margin: 0;
}

.page-content {
  padding: 4rem 0;
}

.content-card {
  background: var(--bg-white);
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section:last-child {
  margin-bottom: 0;
}

.content-section h2 {
  color: var(--primary-purple);
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.content-section p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.content-section ul {
  list-style: none;
  padding-left: 0;
}

.content-section li {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-dark);
  padding-left: 2rem;
  position: relative;
  margin-bottom: 0.75rem;
}

.content-section li::before {
  content: "•";
  color: var(--primary-purple);
  font-weight: bold;
  font-size: 1.5rem;
  position: absolute;
  left: 0.5rem;
}

.contact-info {
  background: var(--bg-light);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary-purple);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .content-card {
    padding: 2rem 1.5rem;
  }

  .content-section h2 {
    font-size: 1.5rem;
  }
}
</style>
