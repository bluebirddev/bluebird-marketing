<template>
  <Layout>
    <header>
      <div class="header-content">
        <g-image src="~/assets/logo.svg" alt="logo" class="logo" width="126" />
        <ul class="nav">
          <li v-for="navItem in navItems" :key="navItem">
            {{ navItem }}
          </li>
        </ul>
      </div>
    </header>
    <main>
      <h2>creating future tech with <strong>style</strong> and <strong>simplicity</strong></h2>
      <p><strong>Bluebird Development</strong> provides exclusive consulting, development, and design resource for you and your team.</p>
      <button>Find out more</button>
    </main>
    <svg viewBox="0 0 100 100"><polygon points="0,0 100,0 0,100"></polygon></svg>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      navItems: ['services', 'clients', 'about us', 'contact us'],
    };
  },
};
</script>

<style scoped>

header {
  top: 0px;
  left: 0px;
  right: 0px;
  height: 75px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #0000000D;
  opacity: 1;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  padding: 0 20px;
}

.nav {
  margin-left: auto;
  padding: 0;
  margin: 0;
  margin-left: auto;
  display: flex;
  list-style: none;
  align-items: center;
}
.nav li {    
  letter-spacing: 0.34px;
  color: #1A73E8;
  padding: 0 20px;
  position: relative;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
h2 {
  width: 336px;
  margin-top: 100px;
  line-height: 40px;
  width: 336px;
  height: 117px;
  text-align: left;
  letter-spacing: 0.6px;
  color: #1A73E8;
  opacity: 1;
  font-weight: 400;
}
p {
  margin-top: 20px;
  width: 361px;
  height: 80px;
  text-align: left;
  letter-spacing: 0.3px;
  color: #A6A8AB;
  opacity: 1;
  font-size: 15px;
  line-height: 25px;
}
button {
  margin-top: 14px;
  padding: 10px 17px;
  background: #CADB2C 0% 0% no-repeat padding-box;
  border-radius: 5px 0px;
  opacity: 1;
  font: inherit;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #FFFFFF;
  opacity: 1;
  border: none;
  outline: none;
  cursor: pointer;
}
button:hover {  
  background-color: #BACB1C;
}
svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 700px;
  height: 700px;
  z-index: -1;
}
polygon {
  fill: #F9FBFD;
}
</style>
