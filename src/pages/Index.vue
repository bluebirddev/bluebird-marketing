<template>
  <Layout>
    <TopNav />
    <main>
      <div class="white-background">
        <div class="background-container">
          <svg viewBox="0 0 700 1600" class="left-bg-0"><polygon points="700,0 0,700 450,1150 0,1600 0,0"></polygon></svg>
          <svg viewBox="0 0 800 1700" class="right-bg-0"><polygon points="580,0 0,580 630,1210 290,1700 800,1700 800,0"></polygon></svg>
        </div>
        <Header />
        <ServiceCards />
      </div>
      <Clients />
      <div class="white-background">
        <div class="background-container">
          <svg viewBox="0 0 1260 2460" class="left-bg-1"><polygon points="300,0 1480,1180 100,1180 620,1700 0,2320 0,0"></polygon></svg>
          <svg viewBox="0 0 1400 2400" class="right-bg-1"><polygon points="1200,0 800,400 1400,1000 0,2400 1400,2400 1400,0"></polygon></svg>
        </div>
        <Reviews />
        <About />
        <GetInTouch />
      </div>
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
.left-bg-0 {
  position: absolute;
  top: 0;
  left: -420px;
  width: 700px;
  height: 1600px;
}
.right-bg-0 {
  position: absolute;
  top: 0;
  right: -420px;
  width: 800px;
  height: 1700px;
}
.left-bg-1 {
  position: absolute;
  top: 0;
  left: -550px;
  width: 1380px;
  height: 2320px;
}
.right-bg-1 {
  position: absolute;
  top: 0;
  right: -420px;
  width: 1400px;
  height: 2400px;
}
polygon {
  fill: #F9FBFD;
}
</style>
