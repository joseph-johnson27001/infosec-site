<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>
            Build Trust.<br />
            Protect Data.<br />
            Get Certified in<br />
            Information Security.
          </h1>
          <p class="hero-subtitle">
            Industry-recognized certification for contractors who manage sensitive information.
          </p>
          <div class="hero-buttons">
            <a href="#" class="btn btn-primary">Get Certified</a>
            <a href="#" class="btn btn-secondary">View Course Details</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="lock-illustration">
            <svg
              width="400"
              height="400"
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="140" cy="140" r="135" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
              <circle cx="140" cy="140" r="110" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
              <rect
                x="85"
                y="130"
                width="110"
                height="90"
                rx="10"
                fill="rgba(255,255,255,0.2)"
                stroke="white"
                stroke-width="3"
              />
              <path
                d="M105 130V110C105 90.67 120.67 75 140 75C159.33 75 175 90.67 175 110V130"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <circle cx="140" cy="165" r="8" fill="white" />
              <rect x="136" y="165" width="8" height="25" rx="4" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #5b4a7e 0%, #3d2f5a 100%);
  color: var(--text-light);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 
.lock-illustration {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
} */

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-image {
    display: none;
  }
}
</style>
