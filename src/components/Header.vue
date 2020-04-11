<template>
  <div class="content">
    <div class="background-image">Placeholder Image</div>
    <section class="left-content">
      <div class="left-content-arrow" />
      <h2>creating future tech with <strong>style</strong> and <strong>simplicity</strong></h2>
      <p><strong>Bluebird Development</strong> provides exclusive consulting, development, and design resources for you and your team.</p>
      <a class="button" href="#services">Find out more</a>
    </section>
    <section class="right-content">
      <div class="right-content-arrow" />
      <h2>lorem ipsum dolor sit amet <strong>consectetuer adipiscing</strong> elit, sed diam nonummy nibh</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
    </section>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';

export default {
  components: {
    TopNav,
  },
};
</script>

<style scoped lang="scss">
.content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 800px;
}
.left-content {
  width: 361px;
  top: 100px;
  position: absolute;
  left: 0;
}
.right-content {
  width: 440px;
  top: 360px;
  position: absolute;
  right: 0;
  text-align: right;
  p {
    margin-left: 80px;
  }
}
p {
  margin-top: 20px;
}
button {
  margin-top: 14px;
}
.background-image {
  height: 450px;
  width: 450px;
  position: absolute;
  top: 80px;
  right: 390px;
  z-index: 1;
  border: 0.5px solid #E6E8EB;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C6C8CB;
}
button:hover {  
  background-color: #BACB1C;
}
.left-content-arrow {
  position: absolute;
  top: 170px;
  left: -170px;
  width: 24px;
  height: 24px;
  border-top: 1px solid #1A73E8;
  border-right: 1px solid #1A73E8;
  transform: rotate(45deg);
}
.right-content-arrow {
  position: absolute;
  top: 260px;
  right: -170px;
  width: 24px;
  height: 24px;
  border-top: 1px solid #1A73E8;
  border-left: 1px solid #1A73E8;
}

// mobile
@media only screen and (max-width: 1100px) {
  .left-content {
    width: 100%;
    position: initial;
    margin-top: 40px;
  }
  .right-content {
    margin-top: 40px;
    width: 100%;
    position: initial;
    text-align: left;
    p {
      margin-left: 0;
    }
  }
  .background-image {
    display: none;
  }
  .content {
    height: initial;
  }
}
</style>
