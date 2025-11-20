<template>
  <section class="pricing">
    <div class="container">
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Professional</h3>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">99</span>
          </div>
          <p class="price-period">per month</p>
          <p class="price-description">Includes secure digital certificate</p>
        </div>
        <div class="pricing-card featured">
          <h3>Enterprise</h3>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">199</span>
          </div>
          <p class="price-period">per month</p>
          <p class="price-description">Team licensing and management</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.pricing {
  padding: 5rem 0;
  background: var(--bg-light);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 3rem auto 0;
}

.pricing-card {
  background: var(--bg-white);
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.pricing-card.featured {
  background: var(--primary-purple);
  color: var(--text-light);
  transform: scale(1.05);
}

.pricing-card.featured h3,
.pricing-card.featured .price,
.pricing-card.featured p {
  color: var(--text-light);
}

.pricing-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.price {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.currency {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.amount {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
}

.price-period {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text-gray);
}

.pricing-card.featured .price-period {
  color: rgba(255, 255, 255, 0.9);
}

.price-description {
  font-size: 1.125rem;
  color: var(--text-gray);
}

.pricing-card.featured .price-description {
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: scale(1);
  }
}
</style>
