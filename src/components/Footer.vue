<template>
  <div class="wrapper">
    <div class="content">
      <!-- <g-image src="~/assets/white-logo.svg" alt="white-logo" class="logo" width="38" /> -->
      <a href="https://topsoftwarecompanies.co/software-development/agencies/united-arab-emirates" target="_blank">
        <g-image class="top-dev-badge" src="https://topsoftwarecompanies.co/badges/top-software-developers.png" alt="software developers uae" title="Software Developers UAE" />
      </a>
      <div class="social-container">
        <img src="@/assets/facebook-logo.svg" alt="facebook-logo" class="disabled" />
        <g-image src="~/assets/twitter-logo.svg" alt="twitter-logo" class="disabled" width="24" />
        <a href="http://linkedin.com/company/bluebirddev" target="_blank">
          <g-image src="~/assets/linkedin-logo.svg" alt="linkedin-logo" width="20" />
        </a>
      </div>
      <p class="text">© {{ year }} Rektech - trading as Bluebird Development</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  margin-top: 53px;
}
.wrapper {
  height: 300px;
  background-color: #1734D1;
}
.social-container {
  margin-top: 20px;
  img {
    opacity: 0.6;
    padding: 15px;
    &.disabled {
      cursor: not-allowed;
    }
    &:not(.disabled):hover {
      opacity: 1;
    }
  }
}
.text {
  text-align: center;
  letter-spacing: 0.24px;
  color: #FFFFFF;
  opacity: 0.6;
  margin-top: 30px;
  font-size: 12px;
}
.top-dev-badge {
  height: 100px;
  margin-top: 30px;
}
</style>
