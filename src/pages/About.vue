<template>
  <Layout>
    <div class="container mx-auto flex flex-col justify-center p-4">
      <h1 class="text-center text-4xl font-bold mt-8">
        About me. 🤳
      </h1>

      <p class="container p-4 max-w-lg mx-auto text-center text-2xl mt-4">
        Get ready for an entire page just about me. Don't worry it's not that
        long.
      </p>
    </div>

    <div class="bg-gray-200">
      <div class="container p-4 max-w-2xl mx-auto mt-24 py-16">
        <div class="w-full sm:flex items-center justify-center">
          <p class="w-full text-gray-800 w-3/4 text-lg sm:mr-12">
            My name is Mario Friz, I'm a {{ age }} years old full-stack
            developer with a focus on frontend stuff. I was born in Stuttgart,
            Germany and now live in the french Alps.
          </p>
          <div
            class="mx-auto w-1/2 sm:w-1/4 rounded-lg overflow-hidden mt-8 sm:mt-0"
          >
            <g-image
              alt="Me"
              src="~/assets/me-2019.jpg"
              class="w-full h-full border-4 border-white rounded-md"
            />
            <p class="text-center text-gray-500 text-sm italic mt-2">
              "Awkward selfie"
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="container mx-auto p-4 py-16">
        <h2
          class="text-center uppercase font-bold tracking-widest text-gray-500 text-sm"
        >
          Hobbies <span class="text-2xl">🍺</span>
        </h2>
        <p class="max-w-lg mx-auto text-center text-xl mt-8">
          Because work is not everything, I try to spend my spare time away from
          the computer.
        </p>

        <div class="max-w-3xl mx-auto mt-12">
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="p-4 sm:w-1/3">
              <div class="p-8 h-full">
                <h4 class="text-xl">Table Tennis 🏓</h4>
                <p class="text text-gray-600 mt-2">
                  I'm a "pongiste" (french name for people who play table
                  tennis) since 2003.
                </p>
              </div>
            </div>

            <div class="p-4 sm:w-1/3">
              <div class="p-8 h-full">
                <h4 class="text-xl">Woodworking 🌲</h4>
                <p class="text text-gray-600 mt-2">
                  I recently started woodworking in my garage. It helps to clear
                  the head after a long day of work.
                </p>
              </div>
            </div>

            <div class="p-4 sm:w-1/3">
              <div class="p-8 h-full">
                <h4 class="text-xl">Ski 🎿</h4>
                <p class="text text-gray-600 mt-2">
                  Well, I live in the Alps so during winter I hit the slopes at
                  the nearby ski resorts !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-800">
      <div class="container mx-auto p-4 py-16">
        <h2
          class="text-center uppercase font-bold tracking-widest text-gray-500 text-sm"
        >
          My cat <span class="text-2xl">🐈</span>
        </h2>
        <p class="max-w-lg mx-auto text-center text-xl mt-8 text-gray-400">
          To finish this page nicely, here is a picture of my cat.
        </p>

        <g-image
          alt="Me"
          src="~/assets/cat.jpg"
          class="w-full max-w-md mx-auto border-4 border-white rounded-md mt-12"
        />
        <p class="text-center text-sm italic text-gray-600 mt-2">
          "La classe !"
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About me',
  },
  computed: {
    age() {
      const now = Date.now();
      const birthday = new Date('26 Sep 1992 19:00:00 GMT');

      const diff = now - birthday.getTime();

      const age = Math.floor(diff / 1000 / 3600 / 24 / 365);
      return age;
    },
  },
};
</script>
