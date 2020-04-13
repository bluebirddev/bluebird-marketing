<template>
  <header>
    <div class="header-content">
      <a href="" class="logo"><g-image src="~/assets/logo.svg" alt="logo" width="126" /></a>
      <ul class="nav">
        <li v-for="navItem in navItems" :key="navItem.id">
          <a :href="`#${navItem.id}`">{{ navItem.name }}</a>
        </li>
      </ul>
      <div id="menu-toggle">
        <input type="checkbox" v-model="burgerOpen" />
        <span />
        <span />
        <span />
      </div>
    </div>
    <ul class="mobile-nav" :class="{open: burgerOpen}">
      <li v-for="navItem in navItems" :key="navItem.id">
        <a :href="`#${navItem.id}`">{{ navItem.name }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    hash() {
      return this.$route.hash;
    },
  },
  watch: {
    hash() {
      this.burgerOpen = false;
    },
  },
  data() {
    return {
      burgerOpen: false,
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
#menu-toggle {
  display: none;
  position: relative;
  margin-left: auto;
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
  input {    
    display: block;
    width: 45px;
    height: 38px;
    position: absolute;
    top: -7px;
    left: -5px;    
    cursor: pointer;    
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */    
    -webkit-touch-callout: none;
  }
  span + span {
    margin-top: 5px;
  }
  span {
    display: block;
    width: 33px;
    height: 4px;
    position: relative;
    
    background-color: #1A73E8;
    border-radius: 3px;
    
    z-index: 1;
    
    transform-origin: 4px 0px;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background-color 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  /* 
  * Transform all the slices of hamburger
  * into a crossmark.
  */
  input:checked ~ span:nth-child(2) {
    opacity: 1;
    transform: rotate(45deg) translate(2px, -2px);
  }

  /*
  * But let's hide the middle one.
  */
  input:checked ~ span:nth-child(3) {
    opacity: 0;
    /* transform: rotate(0deg) scale(0.2, 0.2); */
  }

  /*
  * Ohyeah and the last one should go the other direction
  */
  input:checked ~ span:nth-child(4) {
    transform: rotate(-45deg) translate(0px, 0px);
    /* transform: rotate(-45deg) translate(0, -1px); */
  }
}

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
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.mobile-nav {
  display: none;
  position: absolute;
  z-index: -1;
  top: 75px;
  background: white;
  width: 100%;
  background: #fff;
  list-style: none;
  left: 0;
  right: 0;
  padding: 20px;
  transform-origin: 0% 0%;
  transform: translate(0, -200%);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  box-shadow: 0px 5px 10px #0000000D;

  &.open {
    transform: none;
  }
  li {    
    letter-spacing: 0.34px;
    color: #1A73E8;
    position: relative;
  }
  a {    
    padding: 10px 5px;
    display: block;
    &:hover {
      /* color: darken(#1A73E8, 20%); */
      text-decoration: underline;
    }
  }
}

.nav {
  margin-left: auto;
  margin-left: auto;
  display: flex;
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
// mobile
@media only screen and (max-width: 700px) {
  .nav {
    display: none;
  }
  #menu-toggle {
    display: block;
  }
  .mobile-nav {
    display: block;
  }
}
</style>
