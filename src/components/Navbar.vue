<template>
  <div class="max-w-4xl mx-auto p-4 sm:mb-12">
    <header class="flex-wrap sm:flex-no-wrap flex items-center justify-between">
      <nav
        class="flex flex-1 items-center justify-center sm:justify-start -ml-3 py-2"
      >
        <g-link
          to="/"
          class="px-3 text-gray-600 hover:text-gray-900"
          exact-active-class=" text-gray-800 font-bold"
          ><svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path></svg
        ></g-link>
        <!-- <g-link to="/projects/" class="px-3 text-gray-600 hover:text-gray-900"
          >Projects</g-link
        > -->
        <g-link
          to="/blog/"
          class="px-3 text-gray-600 hover:text-gray-900"
          active-class=" text-gray-800 font-bold"
          >Articles</g-link
        >
        <g-link
          to="/about"
          class="px-3 text-gray-600 hover:text-gray-900"
          active-class=" text-gray-800 font-bold"
          >About</g-link
        >
      </nav>

      <g-link
        to="/"
        class="order-first sm:order-none mb-4 sm:mb-0 mx-auto w-32 h-32 p-2 rounded-full overflow-hidden border-4 border-white"
      >
        <g-image alt="Mario Friz" src="~/assets/avatar.png" class="mt-4" />
      </g-link>

      <nav class="flex items-center justify-center sm:justify-end flex-1 -mr-3">
        <g-link
          to="https://github.com/mariofriz"
          class="px-3 text-gray-600 hover:text-gray-900"
          >Github<ExternalLink />
        </g-link>
        <g-link
          to="https://fr.linkedin.com/in/mariofriz"
          class="px-3 text-gray-600 hover:text-gray-900"
          >LinkedIn<ExternalLink
        /></g-link>
      </nav>
    </header>
  </div>
</template>

<script>
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  components: {
    ExternalLink,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
