<template>
  <Layout>
    <div class="container mx-auto flex flex-col justify-center p-4">
      <div class="text-center">
        <g-link
          to="/blog/"
          class="px-3 underline text-gray-600 hover:text-gray-900"
          >Back to all articles</g-link
        >
      </div>

      <h1 class="text-center text-4xl font-bold mt-12">
        {{ $page.post.title }}
      </h1>

      <p class="max-w-lg mx-auto text-center text-2xl mt-4">
        {{ $page.post.description }}
      </p>

      <p class="text-center text-gray-500 mt-4">
        Published on {{ $page.post.date }}
      </p>

      <g-image
        :alt="$page.post.title"
        :src="$page.post.cover"
        fit="cover"
        class="w-full max-w-3xl mt-8 mx-auto rounded-md"
      />

      <article
        class="content w-full max-w-2xl mx-auto py-16"
        v-html="$page.post.content"
      ></article>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style scoped>
.content >>> {
  @apply text-gray-800;
}

.content >>> p:first-child {
  @apply mt-0;
}

.content >>> h2 {
  @apply mt-16;
  @apply text-3xl;
}

.content >>> h3 {
  @apply mt-12;
  @apply text-2xl;
}

.content >>> h4 {
  @apply mt-12;
  @apply text-xl;
}

.content >>> p {
  @apply my-8;
  @apply leading-loose;
}

.content >>> a {
  @apply text-teal-600;
  @apply underline;
}

.content >>> img {
  @apply mb-16;
  @apply max-w-full;
  @apply mx-auto;
  @apply rounded-md;
}

.content >>> p code,
.content >>> ul code {
  @apply font-mono;
  @apply text-sm;
  @apply bg-gray-100;
  @apply px-2;
  @apply py-1;
  @apply rounded-md;
  @apply text-gray-600;
}

.content >>> pre {
  @apply my-8;
  @apply rounded-md;
}

.content >>> pre > code {
  @apply text-sm;
}

.content >>> blockquote {
  @apply my-16;
  @apply mx-8;
  @apply text-xl;
  @apply italic;
}

.content >>> ul {
  @apply list-disc;
  @apply ml-6;
  @apply leading-loose;
}
</style>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    description
    cover (width: 800, height: 400, quality: 90)
    date (format: "MMMM D, YYYY")
    timeToRead
    content
  }
}
</page-query>
