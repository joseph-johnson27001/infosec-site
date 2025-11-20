<template>
  <section class="program-highlights">
    <div class="container">
      <h2>Program Highlights</h2>
      <div class="highlights-grid">
        <div class="highlight-card">
          <div class="highlight-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2" />
              <path
                d="M18 24l4 4 8-8"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3>Secure & Compliant</h3>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="12"
                y="16"
                width="24"
                height="20"
                rx="2"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M16 16v-4a8 8 0 0116 0v4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <h3>Industry-Aligned Curriculum</h3>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14"
                y="14"
                width="20"
                height="20"
                rx="2"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M24 20v8M20 24h8"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <h3>Digital Certificate & Verification</h3>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2" />
              <path
                d="M12 24c0-6.627 5.373-12 12-12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <h3>Globally Recognized</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.program-highlights {
  padding: 5rem 0;
  background: var(--bg-light);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.highlight-card {
  background: var(--bg-white);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.highlight-icon {
  color: var(--primary-purple);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.highlight-card h3 {
  font-size: 1.25rem;
  color: var(--text-dark);
}
</style>
