// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  titleTemplate: 'Bluebird Development',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-164344873-1UA-XXXXXXXXX-X'
      }
    }
  ],
  icon: './static/favicon.png'
}
