<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-brand">
          <RouterLink to="/">
            <svg class="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="14" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2.5"/>
              <path d="M10 14V10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10V14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="16" cy="21" r="2" fill="currentColor"/>
            </svg>
            <span class="logo-text">Secure Information Handling Academy</span>
          </RouterLink>
        </div>
        <div class="navbar-menu">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/privacy" class="nav-link">Privacy Policy</RouterLink>
          <RouterLink to="/terms" class="nav-link">Terms & Conditions</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.navbar {
  background: var(--bg-white);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--border-color);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
}

.navbar-brand a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--primary-purple);
  font-weight: 700;
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.navbar-brand a:hover {
  color: var(--dark-purple);
}

.logo-icon {
  color: var(--primary-purple);
}

.logo-text {
  white-space: nowrap;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-purple);
}

.nav-link.router-link-active {
  color: var(--primary-purple);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-purple);
}

@media (max-width: 768px) {
  .navbar-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navbar-menu {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .logo-text {
    font-size: 1rem;
  }
}
</style>
