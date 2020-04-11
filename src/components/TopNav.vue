<template>
  <header>
    <div class="header-content">
      <a href="" class="logo"><g-image src="~/assets/logo.svg" alt="logo" width="126" /></a>
      <ul class="nav">
        <li v-for="navItem in navItems" :key="navItem.id">
          <a :href="`#${navItem.id}`">{{ navItem.name }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'services', id: 'services' },
        { name: 'clients', id: 'clients' },
        { name: 'about us', id: 'about-us' },
        { name: 'contact us', id: 'contact-us' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
header {
  top: 0px;
  left: 0px;
  right: 0px;
  height: 75px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #0000000D;
  opacity: 1;
  position: fixed;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;
}

.nav {
  margin-left: auto;
  padding: 0;
  margin: 0;
  margin-left: auto;
  display: flex;
  list-style: none;
  align-items: center;
  li {    
    letter-spacing: 0.34px;
    color: #1A73E8;
    position: relative;
  }
  a {    
    padding: 20px;
    &:hover {
      /* color: darken(#1A73E8, 20%); */
      text-decoration: underline;
    }
  }
}
</style>
