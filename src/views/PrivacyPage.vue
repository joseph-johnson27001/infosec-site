<template>
  <div class="privacy">
    <div class="page-header">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p class="header-subtitle">Last updated: November 20, 2025</p>
      </div>
    </div>

    <div class="page-content">
      <div class="container">
        <div class="content-card">
          <section class="content-section">
            <h2>1. Introduction</h2>
            <p>
              At Secure Information Handling Academy, we are committed to protecting your privacy
              and ensuring the security of your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your data when you use our certification platform.
            </p>
          </section>

          <section class="content-section">
            <h2>2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Professional credentials and qualifications</li>
              <li>Payment and billing information</li>
              <li>Course progress and assessment results</li>
              <li>Communications with our support team</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our certification services</li>
              <li>Process your enrollment and payments</li>
              <li>Issue and verify digital certificates</li>
              <li>Communicate important updates about your certification</li>
              <li>Improve our courses and platform</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information
              from unauthorized access, disclosure, or misuse. All data is encrypted in transit and
              at rest, and we regularly audit our security practices to ensure compliance with
              information security best practices.
            </p>
          </section>

          <section class="content-section">
            <h2>5. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information only in the following circumstances:
            </p>
            <ul>
              <li>With certification verification services (with your consent)</li>
              <li>With service providers who assist in operating our platform</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your employer or sponsoring organization (if applicable)</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <p class="contact-info">
              Email: privacy@sihacademy.com<br />
              Address: [Your Business Address]
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
