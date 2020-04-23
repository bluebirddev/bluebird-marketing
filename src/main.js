// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

require('typeface-courier-prime')
require('typeface-montserrat')
require('normalize.css')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, maximum-scale=5.0'
  });

  head.meta.push({
    name: 'Description',
    content: 'Bluebird Development: Creating future tech with style and simplicity.'
  });

  head.script.push({
    src: '//static.getclicky.com/js',
    body: true
  });
}
