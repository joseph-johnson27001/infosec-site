<template>
  <section class="testimonials">
    <div class="container">
      <h2>Testimonials</h2>
      <div class="testimonial-card">
        <div class="testimonial-header">
          <div class="avatar">SJ</div>
          <div class="testimonial-author">
            <h4>Sarah Johnson</h4>
            <p>Contractor</p>
          </div>
        </div>
        <p class="testimonial-text">
          "I mancò bizzones veterici ce bullitad with buffrechishia aer dimane losal is with esiard
          sua depentia Nagar oroactramase"
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.testimonials {
  padding: 5rem 0;
}

.testimonial-card {
  background: var(--bg-light);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  max-width: 800px;
  margin: 3rem auto 0;
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.avatar {
  width: 60px;
  height: 60px;
  background: var(--primary-purple);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
}

.testimonial-author h4 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: var(--text-dark);
}

.testimonial-author p {
  color: var(--text-gray);
  margin: 0;
  font-size: 0.95rem;
}

.testimonial-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-dark);
  font-style: italic;
}
</style>
