<template>
  <Layout>
    <div class="container mx-auto flex flex-col justify-center p-4 mb-32">
      <h1 class="text-center text-4xl font-bold mt-16">
        Whoops ! ⛱️
      </h1>

      <p class="max-w-lg mx-auto text-center text-2xl mt-12">
        It seems like the page that you are looking for is no longer here.
      </p>

      <div class="text-center mt-12">
        <g-link to="/" class="p-2 underline text-gray-600 hover:text-gray-900"
          >Take me back home</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404',
  },
  components: {},
};
</script>
