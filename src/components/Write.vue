<template>
  <div class="bg-gray-800">
    <div class="container mx-auto p-4 py-16">
      <h2
        class="text-center uppercase font-bold tracking-widest text-gray-600 text-sm"
      >
        Write <span class="text-2xl">📓</span>
      </h2>
      <p class="max-w-lg mx-auto text-center text-xl text-gray-400 mt-8">
        Sometimes I write down some notes and findings that I feel are worth
        sharing
      </p>

      <div class="max-w-3xl mx-auto mt-12">
        <div class="flex flex-wrap justify-center -mx-6">
          <div
            v-for="article in $static.posts.edges"
            :key="article.node.id"
            class="p-6 sm:w-1/2"
          >
            <g-link :to="article.node.path">
              <g-image
                :alt="article.node.title"
                :src="article.node.cover"
                class="h-64 object-cover rounded-md border-4 border-gray-700"
              />
              <h4 class="text-xl text-gray-300 mt-4">
                {{ article.node.title }}
              </h4>
              <p class="text text-gray-500 mt-2">
                {{ article.node.description }}
              </p>
            </g-link>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <g-link
          to="/blog/"
          class="p-2 underline text-gray-500 hover:text-gray-400"
          >Browse all articles</g-link
        >
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allPost(sortBy: "date", order: DESC, limit: 4) {
    totalCount
    edges {
      node {
        id
        title
        description
        cover
        path
      }
    }
  }
}
</static-query>
