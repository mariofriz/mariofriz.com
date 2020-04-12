<template>
  <div class="font-sans text-gray-900 flex flex-col min-h-screen">
    <div class="flex-grow">
      <Navbar />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
