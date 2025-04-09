<template>
  <div class="home">
    <hero-section @open-modal="openModal" />
    <features-section />
    <how-it-works-section />
    <example-section />
    <cta-section @open-modal="openModal" />
  </div>
</template>

<script>
import HeroSection from '../components/sections/HeroSection.vue';
import FeaturesSection from '../components/sections/FeaturesSection.vue';
import HowItWorksSection from '../components/sections/HowItWorksSection.vue';
import ExampleSection from '../components/sections/ExampleSection.vue';
import CtaSection from '../components/sections/CtaSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    FeaturesSection,
    HowItWorksSection,
    ExampleSection,
    CtaSection
  },
  methods: {
    openModal(tab) {
      this.$emit('open-modal', tab);
    }
  }
}
</script>