<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-brand">
          <RouterLink to="/">
            <svg
              class="logo-icon"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                y="14"
                width="20"
                height="14"
                rx="2"
                stroke="currentColor"
                stroke-width="2.5"
              />
              <path
                d="M10 14V10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10V14"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <circle cx="16" cy="21" r="2" fill="currentColor" />
            </svg>
            <span class="logo-text">SIHA</span>
          </RouterLink>
        </div>

        <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
        </button>

        <div class="navbar-menu" :class="{ open: isMenuOpen }">
          <RouterLink to="/" class="nav-link" @click="closeMenu">Home</RouterLink>
          <RouterLink to="/privacy" class="nav-link" @click="closeMenu">Privacy Policy</RouterLink>
          <RouterLink to="/terms" class="nav-link" @click="closeMenu"
            >Terms & Conditions</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
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

.hamburger {
  display: none;
  flex-direction: column;
  gap: 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--primary-purple);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
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
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-purple);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--bg-white);
    box-shadow: var(--shadow-lg);
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
  }

  .navbar-menu.open {
    max-height: 300px;
    padding: 1rem 0;
  }

  .nav-link {
    width: 100%;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border-color);
  }

  .nav-link:last-child {
    border-bottom: none;
  }

  .nav-link.router-link-active::after {
    display: none;
  }

  .logo-text {
    font-size: 1rem;
  }
}
</style>
