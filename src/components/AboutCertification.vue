<template>
  <section class="about-certification">
    <div class="container">
      <h2>About the Certification</h2>
      <div class="about-content">
        <div class="certificate-section">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
            alt="Information Security Professional"
            class="course-image"
          />
          <div class="course-overview">
            <h4>Comprehensive Curriculum</h4>
            <ul class="course-points">
              <li>9 comprehensive chapters</li>
              <li>Chapter-specific exams</li>
              <li>Final certification exam</li>
              <li>Real-world case studies</li>
              <li>Self-paced 24/7 access</li>
            </ul>
          </div>
        </div>
        <div class="why-matters">
          <h3>Why This Certification Matters</h3>
          <div class="benefits">
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>Strengthen client trust</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M8 12h8M12 8v8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <span>Learn compliance fundamentals</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="2" />
                  <path
                    d="M4 20c0-4 3.5-6 8-6s8 2 8 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <span>Gain internationally recognized certification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about-certification {
  padding: 5rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3rem;
}

.certificate-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.course-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  object-fit: cover;
  aspect-ratio: 1;
}

.course-overview h4 {
  font-size: 1.25rem;
  color: var(--primary-purple);
  margin-bottom: 1rem;
}

.course-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.course-points li {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text-dark);
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.75rem;
}

.course-points li::before {
  content: "✓";
  color: var(--primary-purple);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.why-matters h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-dark);
}

.benefits {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
}

.benefit-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-purple);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .certificate-section {
    grid-template-columns: 1fr;
  }
}
</style>
