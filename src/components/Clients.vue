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
        <div class="container">
          <div class="inner-row">
            <div id="row">
              <a href="https://bank.tech/" target="_blank">
              <span>banktech</span>
              <g-image src="~/assets/clients/banktech.svg" alt="banktech" width="100" />
              </a>
            </div>
            <div id="row">
              <a href="https://www.pabtglobal.com" target="_blank">
              <span>pump-and-abrasion</span>
              <g-image src="~/assets/clients/pump-and-abrasion.png" alt="pump-and-abrasion" width="200" style="width:100px;" />
              </a>
            </div>
            <div id="row"> 
               <a href="https://thorchain.org/" target="_blank">
              <span>THORChain</span>
              <g-image src="~/assets/clients/thorchain.svg" alt="thorchain" width="106" />
              </a>
            </div>
            <div id="row"> 
              <a href="https://coindirect.com" target="_blank">
              <span>coindirect.com</span>
              <g-image src="~/assets/clients/coindirect.svg" alt="coindirect" width="96" />
              </a>
            </div>
          </div>
          <div class="inner-row">
            <div id="row">
              <a href="https://www.raubex.co.za" target="_blank">
              <span>raubex</span>
              <g-image src="~/assets/clients/raubex.png" alt="raubex" width="164" style="width:82px;" />
              </a>
            </div>
            <div id="row">
             
              <a href="https://www.thedelta.io" target="_blank">
                <span>thedelta</span>
                <g-image src="~/assets/clients/delta.png" alt="delta" width="180" style="width:90px;" />
              </a>
            </div>
            <div id="row">
              <a href="https://revix.com" target="_blank">
              <span>revix</span>
              <g-image src="~/assets/clients/revix.png" alt="revix" width="172" style="width:86px;" />
              </a>
            </div>
            <div id="row"> 
               <a href="https://www.duepay.co.za/" target="_blank">
                <span>duepay</span>
                <g-image src="~/assets/clients/duepay.png" alt="duepay" width="96" />
              </a>
            </div>
            <div id="row"> 
              <a href="https://22seven.com" target="_blank">
              <span>22seven</span>
              <g-image src="~/assets/clients/22seven.svg" alt="22seven" width="96" />
              </a>
            </div>
          </div>
          <div class="inner-row">
            <div id="row">
              <a href="https://aurorasustainability.com/" target="_blank">
              <span>aurora</span>
              <g-image src="~/assets/clients/aurora.svg" alt="aurora" width="102" />
              </a>
            </div>
            <div id="row"> 
               <a href="https://www.evuna.co.za/" target="_blank">
              <span>evuna</span>
              <g-image src="~/assets/clients/evuna.svg" alt="evuna" width="96" />
              </a> 
            </div>
            <div id="row"> 
              <a href="https://layup.co.za" target="_blank">
              <span>layup</span>
              <g-image src="~/assets/clients/layup.png" alt="layup" width="172" style="width:86px;" />
              </a>
            </div>
            <div id="row"> 
              <a href="https://fame.shopping" target="_blank" >
              <span>FameShopping</span>
              <g-image src="~/assets/clients/fame.svg" alt="fameshopping" width="135" />
              </a>
            </div>
          </div>
        </div>
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
 top: -75px;
 position: absolute;
}
.container {
  display: flex;
  flex-direction: column;
}
.inner-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  width: 350px;
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
  flex-direction: row-reverse;
  a {
    width: 130px;
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

// mobile
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
  }
  .wrapper {
    padding: 60px 0;
  }
  .container {
    display: inline-flex;
    flex-flow: column wrap;
    flex-flow: row wrap;
    align-content: space-between;
    height: 300px;
    margin-top:-10px
  }
  .inner-row > div {
  display:flex;
  align-items: center;
  line-height: 40px;
  overflow:initial; 
  }
  .inner-row {
    width: 32%;
    margin-bottom: 2%; 
    align-content: center;
    align-items: center;
  }
  .inner-row:nth-child(3n+1) { order: 1; justify-content: flex-end;  justify-content: space-evenly;}
  .inner-row:nth-child(3n+2) { order: 2; justify-content: flex-start;; justify-items: center;}
  .inner-row:nth-child(3n)   { order: 3; justify-items: center; justify-content: flex-start;padding-top: 20px; padding-block: -15px;  }

  .container::before,
  .container::after {
    content: "";
    order: 1;
    justify-content: space-evenly;
    align-items: center;
  }
}

@media only screen and (max-width: 400px) {
  .content {
    display: flex;
  }
  .title {
    margin: 0;
    width: 100%;
  }
  .clients {
    justify-content: space-around;
    margin-top: 30px;
  }
  .wrapper {
    padding: 60px 0;
  }
  .container {
  display: flex;
  flex-direction: column;
  width: 160px;
  }
  .inner-row {
  display: flex;
  flex-direction:column;
  align-content: space-evenly;
  justify-content: space-evenly;
  align-items: baseline;
  flex: 1 0;
  align-self: flex-start;
  margin-inline: 95px;
  margin-left:-50px;
  }
}
</style>
