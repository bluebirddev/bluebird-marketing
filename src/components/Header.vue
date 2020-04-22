<template>
  <div class="content">
    <section class="left-content" data-aos="fade-right">
      <div class="left-content-arrow" />
      <h2>creating innovative software with <strong>style</strong> and <strong>simplicity</strong></h2>
      <p><strong>Bluebird Development</strong> provides exclusive consulting, development, and design resources for you and your team.</p>
      <a class="button" href="#services">Find out more</a>
    </section>
    <div class="header-image-container"><g-image src="~/assets/header.png" class="header-image" alt="header-image" width="674" /></div>
    <section class="right-content" data-aos="fade-left">
      <div class="right-content-arrow" />
      <h2>from UI tweaks to <br/>fully developed banking systems, we cater for<br/><strong> all your needs</strong></h2>
      <p>We’re a <strong>highly adaptable</strong> team with the right skills, real-world experience, and drive.  We’re ready for any challenge.</p>
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
  height: 760px;
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
.header-image {
  top: 73px;
  left: 324px;
  position: absolute;
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
  .header-image-container {
    display: flex;
  }
  .header-image {
    position: initial;
    margin: 50px auto 30px;
    width: 100%;
    max-width: 400px;
  }
  .left-content {
    width: 100%;
    position: initial;
    margin-top: 40px;
  }
  .right-content {
    margin-top: 20px;
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
