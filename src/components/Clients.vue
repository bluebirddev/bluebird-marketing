<template>
  <div class="wrapper">
    <div class="content">
      <h2 class="title">
        some of the people we’ve <strong>worked</strong> with
        <svg class="underline">
          <polyline points="5,5 115,5 122,17" />
        </svg>
      </h2>
      <div class="clients">
        <a href="https://22seven.com" target="_blank">
          <g-image src="~/assets/clients/22seven.svg" width="86" />
        </a>
        <a href="https://bank.tech" target="_blank">
          <g-image src="~/assets/clients/banktech.png" width="96" />
        </a>
        <a href="https://thedelta.io" target="_blank">
          <g-image src="~/assets/clients/delta.png" width="86" />
        </a>
        <a href="https://fintec.group" target="_blank">
          <g-image src="~/assets/clients/fintec.svg" width="86" />
        </a>
        <a href="https://fomo.travel" target="_blank">
          <g-image src="~/assets/clients/fomo.png" width="72" />
        </a>
        <a href="https://layup.co.za" target="_blank">
          <g-image src="~/assets/clients/layup.png" width="86" />
        </a>
        <a href="https://opticollect.com" target="_blank">
          <g-image src="~/assets/clients/opticollect.svg" width="86" />
        </a>
        <a href="https://www.pabtglobal.com" target="_blank">
          <g-image src="~/assets/clients/pump-and-abrasion.png" width="100" />
        </a>
        <a href="https://www.raubex.co.za" target="_blank">
          <g-image src="~/assets/clients/raubex.png" width="82" />
        </a>
        <a href="https://revix.com" target="_blank">
          <g-image src="~/assets/clients/revix.png" width="86" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          url: "https://22seven.com",
          logo: "~/assets/clients/22seven.svg"
        },
        {
          url: "https://bank.tech",
          logo: "~/assets/clients/banktech.png"
        },
        {
          url: "https://www.thedelta.io",
          logo: "~/assets/clients/delta.png"
        },
        {
          url: "https://fintec.group",
          logo: "~/assets/clients/fintec.svg"
        },
        {
          url: "https://fomo.travel",
          logo: "~/assets/clients/fomo.png"
        },
        {
          url: "https://layup.co.za",
          logo: "~/assets/clients/layup.png"
        },
        {
          url: "https://opticollect.com",
          logo: "~/assets/clients/opticollect.svg"
        },
        {
          url: "https://www.pabtglobal.com",
          logo: "~/assets/clients/pump-and-abrasion.png"
        },
        {
          url: "https://www.raubex.co.za",
          logo: "~/assets/clients/raubex.png"
        },
        {
          url: "https://revix.com",
          logo: "~/assets/clients/revix.png"
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #1A73E8;
  padding: 90px 0;
  margin-bottom: 100px; // temp
}
.content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  padding: 0 20px;
  align-items: center;
}
.title {
  width: 300px;
  color: #fff;
  width: 310px;
  margin-right: 210px;
}
.underline {
  margin-top: 10px;
  height: 17px;
}
polyline {
  stroke: #fff;
  stroke-width: 1px;
  fill: none;
}
.clients {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  a {
    width: 130px;
    text-align: center;
  }
  img {
    margin: 10px;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
