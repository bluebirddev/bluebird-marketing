// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  titleTemplate: 'Bluebird Development',
  plugins: [
    // {
    //   use: 'gridsome-plugin-pwa',
    //   options: {
    //     title: 'Bluebird Development',
    //     startUrl: '/',
    //     display: 'standalone',
    //     statusBarStyle: 'default',
    //     manifestPath: 'manifest.json',
    //     disableServiceWorker: true,
    //     serviceWorkerPath: 'service-worker.js',
    //     cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
    //     shortName: 'Gridsome',
    //     themeColor: '#1A73E8',
    //     backgroundColor: '#ffffff',
    //     icon: 'static/favicon.png', // must be provided like 'src/favicon.png'
    //     msTileImage: '',
    //     msTileColor: '#1A73E8'
    //   },
    // },
    {
      use: "gridsome-plugin-service-worker",
    },
  ],
  icon: './static/favicon.png'
}
