<template>
  <div class="layout">
    <slot />
  </div>
</template>


<script>
import 'aos/dist/aos.css';

export default {
  mounted() {
    const AOS = require('aos');
    // You can also use <link> for styles
    // ..
    AOS.init();

    const Analytics = require('analytics');
    const googleAnalytics = require('@analytics/google-analytics');

    const analytics = Analytics.init({
      app: 'bluebird-development',
      plugins: [
        googleAnalytics.init({
          trackingId: 'UA-164344873-1',
        }),
      ],
    });
    /* Track a page view */
    analytics.page();
  },
};
</script>

<style lang="scss">
html {  
  scroll-behavior: smooth;
}
body {
  font-family: 'Montserrat', Arial, sans-serif;
  background-color: #F9FBFD;
  overflow-x: hidden;
}
h2 {
  letter-spacing: 0.6px;
  color: #1A73E8;
  font-weight: 400;
  font-size: 30px;
  /* line-height: 40px; */
  line-height: 1.3333333333333;
  strong {
    font-weight: 600;
  }
}
h3 {
  line-height: 23px;
  letter-spacing: 0.4px;
  color: #1A73E8;
  font-weight: 400;
  font-size: 20px;
  strong {
    font-weight: 600;
  }
}
p {
  letter-spacing: 0.3px;
  color: #A6A8AB;
  font-size: 15px;
  line-height: 25px;
}
.button {
  padding: 10px 17px;
  background: #CADB2C 0% 0% no-repeat padding-box;
  border-radius: 5px 0px;
  font: inherit;
  font-family: 'Courier Prime', monospace;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #FFFFFF;
  border: none;
  outline: none;
  display: inline-block;
  min-width: 110px;
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
  &:not(:disabled) {
    cursor: pointer;
    &:hover {  
      background-color: #BACB1C;
    }
  }
}
a {
  font: inherit;
  text-decoration: none;
  color: inherit;
}
.comment {
  display: block;
  color: #ff2727;
  font-weight: bold;
  font-family: monospace;
}

@media only screen and (max-width: 1100px) {
  h2 {
    font-size: 24px;
  }
}
</style>
