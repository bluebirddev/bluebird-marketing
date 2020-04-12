<template>
  <div class="content">
    <h2>what <strong>people</strong> have to say
      <svg class="underline">
        <polyline points="5,17 12,5 200,5" />
      </svg>
    </h2>
    <div class="carousel-container">
      <svg @click="onLeft()" class="left-arrow" xmlns="http://www.w3.org/2000/svg" width="26.162" height="19.993" viewBox="0 0 26.162 19.993">          
        <g transform="translate(-540.293 -2184.867)">
          <line class="a" x1="25.455" transform="translate(541 2194.863)"/>
          <path class="a" d="M550.643,2204.506,541,2194.863l9.643-9.643"/>
        </g>
      </svg>
      <div class="carousel" ref="carousel">
        <div v-for="(review, i) in reviews" :key="i" class="carousel-slide">
          <p>
            {{ review.text }}
          </p>
          <p class="highlight">
            {{ review.name }}
          </p>
        </div>
      </div>
      <svg @click="onRight()" class="right-arrow" xmlns="http://www.w3.org/2000/svg" width="26.162" height="19.993" viewBox="0 0 26.162 19.993">
        <g transform="translate(-1353.545 -2185.332)">
          <line class="a" x2="25.455" transform="translate(1353.545 2195.328)"/>
          <path class="a" d="M1369.357,2204.971l9.643-9.643-9.643-9.643"/>
        </g>
      </svg>
    </div>    
  </div>
</template>

<script>
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

export default {
  mounted() {
    const elem = this.$refs.carousel;
    this.flkty = new Flickity( elem, {
      prevNextButtons: false,
      autoPlay: 4000,
      wrapAround: true,
    });
  },
  methods: {
    onLeft() {
      this.flkty.stopPlayer();
      this.flkty.previous();
    },
    onRight() {
      this.flkty.stopPlayer();
      this.flkty.next();
    },
  },
  data() {
    return {
      flkty: undefined,
      reviews: [
        {
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
          name: 'Name Surname – Location',
        },
        {
          text: `Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. `,
          name: 'Name Surname – Location',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  display: inline-block;
}
.underline {
  margin-top: 10px;
  height: 17px;
  display: block;
  width: 200px;
  margin-left: auto;
  polyline {
    stroke: #1A73E8;
    stroke-width: 1px;
    fill: none;
  }
}
.carousel-container {
  text-align: center;
  width: 800px;
  display: flex;
  align-items: center;
}
.carousel {
  flex: 1;
}
.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  p {
    width: 554px;
  }
}
.highlight {
  color: #CADB2C;
  text-align: center;
  letter-spacing: 0.24px;
  font-size: 12px;
  line-height: 20px;
}
.left-arrow, .right-arrow {
  opacity: 0.7;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 64px;
  .a {
    fill: none;
    stroke: #1a73e8;
    stroke-miterlimit: 10;
  }
  &:hover {
    opacity: 1;
  }
}
</style>

<style lang="scss">
.flickity-page-dots .dot {
  border: 1px solid #A6A8AB;
  background-color: transparent;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  margin: 6px;
  opacity: 1;
  &.is-selected {
    background-color: #1A73E8;
  }
}
</style>