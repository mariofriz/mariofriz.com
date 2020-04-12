<template>
  <Layout>
    <Hero />
    <Work />
    <Play />
    <Write />
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Work from '~/components/Work.vue';
import Play from '~/components/Play.vue';
import Write from '~/components/Write.vue';

export default {
  metaInfo: {
    title: 'Hi !',
  },
  components: {
    Hero,
    Work,
    Play,
    Write,
  },
};
</script>
