<template>
  <div class="wrapper">
    <div id="clients" />
    <div class="content" data-aos="slide-down">
      <h2 class="title">
        some of the people we’ve <strong>worked</strong> with
        <svg class="underline">
          <polyline points="0,5 115,5 122,17" />
        </svg>
      </h2>
      <div class="clients">
        <a href="https://fame.shopping" target="_blank">
          <span>FameShopping</span>
          <g-image src="~/assets/clients/fame.svg" alt="fame" width="96" />
        </a>
        <a href="https://22seven.com" target="_blank">
          <span>22seven</span>
          <g-image src="~/assets/clients/22seven.svg" alt="22seven" width="96" />
        </a>
        <a href="https://aurorasustainability.com/" target="_blank">
          <span>aurora</span>
          <g-image src="~/assets/clients/aurora.svg" alt="aurora" width="102" />
        </a>
        <a href="https://bank.tech" target="_blank">
          <span>bank.tech</span>
          <g-image src="~/assets/clients/banktech.svg" alt="banktech" width="96" />
        </a>
        <a href="https://www.thedelta.io" target="_blank">
          <span>thedelta</span>
          <g-image src="~/assets/clients/delta.png" alt="delta" width="180" style="width:90px;" />
        </a>
        <a href="https://www.raubex.co.za" target="_blank">
          <span>raubex</span>
          <g-image src="~/assets/clients/raubex.png" alt="raubex" width="164" style="width:82px;" />
        </a>
        <a href="https://revix.com" target="_blank">
          <span>revix</span>
          <g-image src="~/assets/clients/revix.png" alt="revix" width="172" style="width:76px;" />
        </a>
        <a href="https://layup.co.za" target="_blank">
          <span>layup</span>
          <g-image src="~/assets/clients/layup.png" alt="layup" width="172" style="width:80px;" />
        </a>
        <a href="https://www.evuna.co.za/" target="_blank">
          <span>evuna</span>
          <g-image src="~/assets/clients/evuna.svg" alt="evuna" width="96" />
        </a>
        <a href="https://www.duepay.co.za/" target="_blank">
          <span>duepay</span>
          <g-image src="~/assets/clients/duepay.png" alt="duepay" width="96" />
        </a>
        <a href="https://coindirect.com" target="_blank">
          <span>coindirect.com</span>
          <g-image src="~/assets/clients/coindirect.svg" alt="coindirect" width="96" />
        </a>
        <a href="https://www.pabtglobal.com" target="_blank">
          <span>pump-and-abrasion</span>
          <g-image src="~/assets/clients/pump-and-abrasion.png" alt="pump-and-abrasion" width="200" style="width:100px;" />
        </a>
        <a href="https://thorchain.org/" target="_blank">
          <span>THORChain</span>
          <g-image src="~/assets/clients/thorchain.svg" alt="thorchain" width="106" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #1A73E8;
  padding: 60px 0;
  position: relative;
}
#clients {
  position: absolute;
  top: -75px;
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
  color: #fff;
  width: 300px;
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
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  width: 630px;
  margin-left: auto;
  a {
    margin: 10px;
    text-align: center;
    > span {
      display: none;
    }
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

// non-desktop
@media only screen and (max-width: 1100px) {
  .content {
    flex-direction: column;
  }
  .title {
    margin: 0;
    width: 100%;
  }
  .clients {
    justify-content: space-around;
    margin-top: 30px;
    width: 100%;    
    a {
      margin: 5px 0;
    }
  }
  .wrapper {
    padding: 60px 0;
  }
}


// mobile
@media only screen and (max-width: 400px) {
  .clients a {
    width: 50%;
  }
}
</style>
