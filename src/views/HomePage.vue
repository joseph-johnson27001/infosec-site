<template>
  <div class="home">
    <HeroSection />
    <TrustedBySection />
    <AboutCertification />
    <ProgramHighlights />
    <TestimonialsSection />
    <PricingSection />
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import TrustedBySection from "../components/TrustedBySection.vue";
import AboutCertification from "../components/AboutCertification.vue";
import ProgramHighlights from "../components/ProgramHighlights.vue";
import TestimonialsSection from "../components/TestimonialsSection.vue";
import PricingSection from "../components/PricingSection.vue";
</script>

<style scoped>
.home {
  width: 100%;
}
</style>
