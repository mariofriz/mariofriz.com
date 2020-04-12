<template>
  <div class="bg-gray-100">
    <div class="max-w-4xl relative mx-auto p-4 pt-16 pb-8">
      <div class="flex -ml-3">
        <!-- <g-link to="/projects/" class="px-3 text-gray-600 hover:text-gray-900"
          >Projects</g-link
        > -->
        <g-link to="/blog/" class="px-3 text-gray-600 hover:text-gray-900"
          >Articles</g-link
        >
        <g-link to="/about" class="px-3 text-gray-600 hover:text-gray-900"
          >About</g-link
        >
        <div class="flex-1"></div>
        <a
          href="#"
          @click.prevent="backToTop()"
          class="p-2 rounded-full text-gray-700 hover:bg-gray-200 hover:text-gray-800"
          title="Back to top"
          ><svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path></svg
        ></a>
      </div>

      <div class="flex -ml-3 mt-4">
        <g-link
          to="https://github.com/mariofriz"
          class="px-3 text-gray-600 hover:text-gray-900"
          >Github<ExternalLink
        /></g-link>
        <g-link
          to="https://fr.linkedin.com/in/mariofriz"
          class="px-3 text-gray-600 hover:text-gray-900"
          >LinkedIn<ExternalLink
        /></g-link>
      </div>

      <p class="text-sm text-gray-500 mt-12">
        &copy; Mario Friz. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  components: {
    ExternalLink,
  },
  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
