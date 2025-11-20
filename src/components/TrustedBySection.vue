<template>
  <section class="trusted-by">
    <div class="container">
      <h2>Trusted & Endorsed by Industry Leaders</h2>
      <p class="section-subtitle">Recognized by international information security authorities.</p>
      <div class="logos">
        <div class="logo-item">
          <div class="logo-placeholder">ISACA</div>
        </div>
        <div class="logo-item">
          <div class="logo-placeholder">(ISC)²</div>
        </div>
        <div class="logo-item">
          <div class="logo-placeholder">ISO</div>
        </div>
        <div class="logo-item">
          <div class="logo-placeholder">NIST</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.trusted-by {
  padding: 4rem 0;
  background: var(--bg-light);
  text-align: center;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-gray);
  margin-bottom: 3rem;
}

.logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

.logo-placeholder {
  padding: 2rem;
  background: var(--bg-white);
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--text-gray);
  box-shadow: var(--shadow);
}
</style>
