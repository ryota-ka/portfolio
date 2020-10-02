module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-58100044-1',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: 'https://ryota-ka.hatenablog.com/rss',
        name: 'HatenaBlog',
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        queries: [
          `{
             viewer {
               pinnedItems(first: 6, types: [REPOSITORY]) {
                 nodes {
                   ... on Repository {
                     id
                     nameWithOwner
                     stargazerCount
                     description
                     forkCount
                     primaryLanguage {
                       name
                     }
                     url
                   }
                 }
               }
             }
          }`,
        ],
      },
    },
  ],
};
