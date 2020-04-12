<template>
  <Layout>
    <div class="container mx-auto flex flex-col justify-center p-4">
      <h1 class="text-center text-4xl font-bold mt-8">
        The blog. ✍️
      </h1>

      <p class="max-w-lg mx-auto text-center text-2xl mt-4">
        Sometimes I write down some notes and findings that I feel are worth
        sharing.
      </p>
    </div>

    <div class="container p-4 max-w-3xl mx-auto py-16">
      <div class="flex flex-wrap justify-center -mx-6">
        <div
          v-for="article in $page.posts.edges"
          :key="article.node.id"
          class="p-6 sm:w-1/2"
        >
          <g-link :to="article.node.path">
            <g-image
              :alt="article.node.title"
              :src="article.node.cover"
              class="h-64 object-cover rounded-md border-4 border-gray-200"
            />
            <h4 class="text-xl mt-4">{{ article.node.title }}</h4>
            <p class="text text-gray-700 mt-2">
              {{ article.node.description }}
            </p>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Articles',
  },
  components: {},
};
</script>

<page-query>
query {
  posts: allPost(sortBy: "date", order: DESC, limit: 4) {
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
</page-query>
