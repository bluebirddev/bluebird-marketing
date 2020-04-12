<template>
  <Layout>
    <TopNav />
    <main>
      <div class="white-background">
        <div class="background-container">
          <svg viewBox="0 0 700 1600" class="left-bg"><polygon points="700,0 0,700 450,1150 0,1600 0,0"></polygon></svg>
          <svg viewBox="0 0 800 1700" class="right-bg"><polygon points="580,0 0,580 630,1210 290,1700 800,1700 800,0"></polygon></svg>
        </div>
        <Header />
        <ServiceCards />
      </div>
      <Clients />
      <Reviews />
      <About />
      <GetInTouch />
    </main>
    <Footer />
  </Layout>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import Header from '@/components/Header.vue';
import ServiceCards from '@/components/ServiceCards.vue';
import Clients from '@/components/Clients.vue';
import Reviews from '@/components/Reviews.vue';
import About from '@/components/About.vue';
import GetInTouch from '@/components/GetInTouch.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    TopNav,
    Header,
    ServiceCards,
    Clients,
    Reviews,
    About,
    GetInTouch,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.background-container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.white-background {
  overflow: hidden;
  padding: 0 20px;
  background-color: #fff;
  max-width: 2000px;
  margin: 0 auto;
}
main {
  margin-top: 75px;
}
.left-bg {
  position: absolute;
  top: 0;
  left: -420px;
  width: 700px;
  height: 1600px;
}
.right-bg {
  position: absolute;
  top: 0;
  right: -420px;
  width: 800px;
  height: 1700px;
}
polygon {
  fill: #F9FBFD;
}
</style>
