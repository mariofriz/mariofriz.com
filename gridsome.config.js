// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Mario Friz',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        shouldPurge: true,
        purgeConfig: {
          whitelistPatterns: [/token.*/, /class.*/],
          whitelistPatternsChildren: [/token.*/, /class.*/],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: ['@gridsome/remark-prismjs'],
        },
      },
    },
  ],
  templates: {
    Post: '/blog/:title',
  },
};
