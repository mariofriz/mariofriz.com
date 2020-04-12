<template>
  <div class="bg-white">
    <div class="container mx-auto p-4 py-16">
      <h2
        class="text-center uppercase font-bold tracking-widest text-gray-500 text-sm"
      >
        Play <span class="text-2xl">🎲</span>
      </h2>
      <p class="max-w-lg mx-auto text-center text-xl mt-8">
        I love trying out new tools and tech stacks. From time to time, I dabble
        in blockchain and cryptocurrencies.
      </p>

      <div class="max-w-3xl mx-auto mt-12">
        <div class="flex flex-wrap justify-center -mx-6">
          <div class="p-6 sm:w-1/2">
            <g-link to="https://lunanimous.github.io/nim-widgets/#/">
              <g-image
                alt="Nimiq Widgets"
                src="~/assets/nim-widgets.png"
                class="h-64 object-cover object-top rounded-md border-4 border-gray-200"
              />
              <h4 class="text-xl mt-4">Nimiq Widgets</h4>
              <p class="text text-gray-600 mt-2">
                A collection of web components to allow NIM payment and donation
                on your website easily.
              </p>
            </g-link>
          </div>

          <div class="p-6 sm:w-1/2">
            <g-link to="https://lunanimous.github.io/tic-tac-toe/">
              <g-image
                alt="Nimiq Tic Tac Toe"
                src="~/assets/nim-tictactoe.png"
                class="h-64 object-cover object-top rounded-md border-4 border-gray-200"
              />
              <h4 class="text-xl mt-4">Nimiq Tic Tac Toe</h4>
              <p class="text text-gray-600 mt-2">
                The famous game powered by transactions on the Nimiq blockchain.
              </p>
            </g-link>
          </div>
        </div>
      </div>

      <!-- <div class="text-center mt-6">
        <g-link
          to="/projects/"
          class="p-2 underline text-gray-600 hover:text-gray-900"
          >Browse all projects</g-link
        >
      </div> -->
    </div>
  </div>
</template>
